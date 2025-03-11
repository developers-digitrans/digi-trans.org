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
  "/blog/enabling-our-client-to-maximise-the-business-value-from-it",
  "/blog/building-enterprise-data-lakes",
  "/blog/mlops-best-practices",
  "/blog/cloud-native-architecture-patterns",
  "/blog/real-time-analytics-kafka",
  "/blog/digital-transformation-banking-success-story",
  "/blog/cloud-migration-healthcare-case-study",
  "/blog/ai-retail-personalization-case-study",
  "/careers",
  "/contact",
  "/ceo-profile",
  "/privacy",
  "/terms",
  "/cookies",
  "/security",
];

const domain = "https://digi-trans.org";
const today = new Date().toISOString().split("T")[0];

// Create the main sitemap
let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemap +=
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

routes.forEach((route) => {
  sitemap += "  <url>\n";
  sitemap += `    <loc>${domain}${route}</loc>\n`;
  sitemap += `    <lastmod>${today}</lastmod>\n`;

  // Set changefreq based on content type
  const changefreq = route.includes("/blog/")
    ? "monthly"
    : route === "/" || route === "/services" || route === "/solutions"
      ? "weekly"
      : "monthly";

  sitemap += `    <changefreq>${changefreq}</changefreq>\n`;

  // Set priority based on route depth and importance
  let priority = "0.5";

  if (route === "/") {
    priority = "1.0";
  } else if (
    route === "/services" ||
    route === "/solutions" ||
    route === "/contact"
  ) {
    priority = "0.9";
  } else if (
    route.startsWith("/services/") ||
    route.startsWith("/solutions/") ||
    route.startsWith("/products/")
  ) {
    priority = "0.8";
  } else if (route === "/blog") {
    priority = "0.7";
  } else if (route.startsWith("/blog/")) {
    priority = "0.6";
  }

  sitemap += `    <priority>${priority}</priority>\n`;

  // Add alternate language versions if you have them
  // sitemap += `    <xhtml:link rel="alternate" hreflang="en" href="${domain}${route}" />\n`;
  // sitemap += `    <xhtml:link rel="alternate" hreflang="fr" href="${domain}/fr${route}" />\n`;

  // Add images for important pages (optional)
  if (
    route === "/" ||
    route.startsWith("/services/") ||
    route.startsWith("/products/")
  ) {
    sitemap += `    <image:image>\n`;
    sitemap += `      <image:loc>${domain}/images/og-image.jpg</image:loc>\n`;
    sitemap += `      <image:caption>Digitrans - Enterprise IT Consultancy</image:caption>\n`;
    sitemap += `    </image:image>\n`;
  }

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

// Create a sitemap index file if you have multiple sitemaps
// This is useful for large sites with many pages
/*
let sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>\n';
sitemapIndex += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
sitemapIndex += '  <sitemap>\n';
sitemapIndex += `    <loc>${domain}/sitemap.xml</loc>\n`;
sitemapIndex += `    <lastmod>${today}</lastmod>\n`;
sitemapIndex += '  </sitemap>\n';
sitemapIndex += '  <sitemap>\n';
sitemapIndex += `    <loc>${domain}/blog-sitemap.xml</loc>\n`;
sitemapIndex += `    <lastmod>${today}</lastmod>\n`;
sitemapIndex += '  </sitemap>\n';
sitemapIndex += '</sitemapindex>';

fs.writeFileSync(path.join(publicDir, "sitemap-index.xml"), sitemapIndex);
*/

console.log("Sitemap generated successfully!");

// Generate a text file with URLs for easy submission to search engines
let urlList = "";
routes.forEach((route) => {
  urlList += `${domain}${route}\n`;
});

fs.writeFileSync(path.join(publicDir, "urls-for-submission.txt"), urlList);
console.log("URL list for search engine submission generated successfully!");
