const fs = require("fs");
const path = require("path");

// Define all routes in your application
const routes = [
  "/",
  "/about",
  "/services",
  "/services/big-data-analytics",
  "/services/ai-solutions",
  "/services/cloud-computing",
  "/solutions",
  "/solutions/enterprise-solutions",
  "/solutions/digital-transformation",
  "/solutions/data-security",
  "/clients",
  "/clients/fortune-500-companies",
  "/clients/gov-agencies",
  "/clients/tech-startups",
  "/products/ledger",
  "/products/utrack",
  "/products/ember",
  "/products/godash",
  "/products/bigbytes",
  "/products/kozmo-ai",
  "/blog",
  "/careers",
  "/contact",
];

const domain = "https://digitrans.ai";
const today = new Date().toISOString().split("T")[0];

let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

routes.forEach((route) => {
  sitemap += "  <url>\n";
  sitemap += `    <loc>${domain}${route}</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;
  sitemap += "    <changefreq>monthly</changefreq>\n";

  // Set priority based on route depth
  const priority =
    route === "/"
      ? "1.0"
      : route.split("/").length === 2
        ? "0.8"
        : route.split("/").length === 3
          ? "0.6"
          : "0.5";

  sitemap += `    <priority>${priority}</priority>\n`;
  sitemap += "  </url>\n";
});

sitemap += "</urlset>";

// Ensure the public directory exists
const publicDir = path.join(__dirname, "..", "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write the sitemap file
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log("Sitemap generated successfully!");
