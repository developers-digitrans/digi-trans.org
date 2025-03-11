const https = require("https");
const fs = require("fs");
const path = require("path");

// Your website domain
const domain = "https://digi-trans.org";

// Search engine submission URLs
const searchEngines = [
  {
    name: "Google",
    url: `https://www.google.com/ping?sitemap=${domain}/sitemap.xml`,
  },
  {
    name: "Bing",
    url: `https://www.bing.com/ping?sitemap=${domain}/sitemap.xml`,
  },
];

// Function to submit sitemap to search engines
function submitSitemap(engine) {
  return new Promise((resolve, reject) => {
    https
      .get(engine.url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          console.log(
            `✅ Submitted sitemap to ${engine.name}. Status: ${res.statusCode}`,
          );
          resolve({
            engine: engine.name,
            status: res.statusCode,
            success: res.statusCode >= 200 && res.statusCode < 300,
          });
        });
      })
      .on("error", (err) => {
        console.error(`❌ Error submitting to ${engine.name}:`, err.message);
        reject(err);
      });
  });
}

// Submit to all search engines
async function submitToAllEngines() {
  console.log("🚀 Starting sitemap submission to search engines...");

  const results = [];

  for (const engine of searchEngines) {
    try {
      const result = await submitSitemap(engine);
      results.push(result);
    } catch (error) {
      results.push({
        engine: engine.name,
        status: "Error",
        success: false,
        error: error.message,
      });
    }
  }

  // Save results to a log file
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const logFile = path.join(
    __dirname,
    "..",
    "logs",
    `sitemap-submission-${timestamp}.json`,
  );

  // Create logs directory if it doesn't exist
  const logsDir = path.join(__dirname, "..", "logs");
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  fs.writeFileSync(logFile, JSON.stringify(results, null, 2));
  console.log(`📝 Submission results saved to ${logFile}`);

  console.log("\n📊 Submission Summary:");
  results.forEach((result) => {
    console.log(
      `${result.engine}: ${result.success ? "✅ Success" : "❌ Failed"}`,
    );
  });

  console.log("\n🔍 Next steps:");
  console.log(
    "1. Verify your site in Google Search Console: https://search.google.com/search-console",
  );
  console.log(
    "2. Verify your site in Bing Webmaster Tools: https://www.bing.com/webmasters",
  );
  console.log(
    "3. Monitor your search performance and indexing status in these tools",
  );
}

// Run the submission
submitToAllEngines().catch((error) => {
  console.error("Error in submission process:", error);
  process.exit(1);
});
