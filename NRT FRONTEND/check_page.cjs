const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

  console.log("Navigating to http://localhost:5173/resources ...");
  try {
    await page.goto('http://localhost:5173/resources', { waitUntil: 'networkidle0', timeout: 15000 });
    console.log("Page loaded successfully.");
    const content = await page.content();
    if (content.includes("PageLoader") || content.includes("animate-spin")) {
      console.log("PAGE IS STUCK ON LOADER.");
    } else {
      console.log("Page content looks fine, loader is not present.");
    }
  } catch (err) {
    console.log("Navigation failed:", err.message);
  }

  await browser.close();
})();
