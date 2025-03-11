import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tempo } from "tempo-devtools/dist/vite";
import fs from "fs";
import { execSync } from "child_process";

const conditionalPlugins: [string, Record<string, any>][] = [];

// @ts-ignore
if (process.env.TEMPO === "true") {
  conditionalPlugins.push(["tempo-devtools/swc", {}]);
}

// Generate sitemap during build
const generateSitemap = () => ({
  name: "generate-sitemap",
  closeBundle: () => {
    try {
      console.log("Generating sitemap...");
      execSync("node scripts/generate-sitemap.js");
      console.log("Sitemap generated successfully!");
    } catch (error) {
      console.error("Error generating sitemap:", error);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Improved code splitting for better caching
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-navigation-menu"],
          animations: ["framer-motion"],
          // Add more chunks for better caching
          helmet: ["react-helmet-async"],
          utils: ["./src/lib/utils.ts"],
          icons: ["lucide-react"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === "production",
        drop_debugger: true,
      },
    },
    // Generate source maps for better debugging
    sourcemap: process.env.NODE_ENV !== "production",
    // Preload critical assets
    assetsInlineLimit: 4096, // 4kb
    // Add cache busting for assets
    chunkSizeWarningLimit: 1000, // 1mb
  },
  base:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.VITE_BASE_PATH || "/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
    // Optimize dependencies for faster development
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "react-helmet-async",
      "lucide-react",
    ],
  },
  plugins: [
    react({
      plugins: conditionalPlugins,
      // Enable fast refresh for better development experience
      fastRefresh: true,
    }),
    tempo(),
    // Generate sitemap during production build
    process.env.NODE_ENV === "production" ? generateSitemap() : null,
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
    // Enable compression for faster development
    compress: true,
    // Enable CORS for API requests
    cors: true,
  },
  preview: {
    // Enable compression for preview server
    compress: true,
    // Port for preview server
    port: 4173,
    // Open browser automatically
    open: true,
  },
});
