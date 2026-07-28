const { chromium } = require("playwright");
const outDir = "C:/Users/my-pc/AppData/Local/Temp/claude/c--Users-my-pc-Desktop-gs-ai/4123ebfb-a32b-4fde-b55c-d18d3a88f82d/scratchpad";

(async () => {
  const browser = await chromium.launch();
  const errors = [];

  // Full desktop (wide)
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1000 } });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const heading = page.getByText("your industry", { exact: false });
  await heading.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, 250));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${outDir}/cardfix-wide.png` });
  await ctx.close();

  // Split-view desktop (~950px)
  const ctxSplit = await browser.newContext({ viewport: { width: 950, height: 1000 } });
  const pageSplit = await ctxSplit.newPage();
  await pageSplit.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const headingSplit = pageSplit.getByText("your industry", { exact: false });
  await headingSplit.scrollIntoViewIfNeeded();
  await pageSplit.evaluate(() => window.scrollBy(0, 250));
  await pageSplit.waitForTimeout(500);
  await pageSplit.screenshot({ path: `${outDir}/cardfix-splitview.png` });
  await ctxSplit.close();

  // Tablet
  const ctxT = await browser.newContext({ viewport: { width: 834, height: 1100 } });
  const pageT = await ctxT.newPage();
  await pageT.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const headingT = pageT.getByText("your industry", { exact: false });
  await headingT.scrollIntoViewIfNeeded();
  await pageT.evaluate(() => window.scrollBy(0, 200));
  await pageT.waitForTimeout(500);
  await pageT.screenshot({ path: `${outDir}/cardfix-tablet.png` });
  await ctxT.close();

  // Mobile
  const ctxM = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const pageM = await ctxM.newPage();
  await pageM.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const headingM = pageM.getByText("your industry", { exact: false });
  await headingM.scrollIntoViewIfNeeded();
  await pageM.evaluate(() => window.scrollBy(0, 250));
  await pageM.waitForTimeout(500);
  await pageM.screenshot({ path: `${outDir}/cardfix-mobile.png` });

  // drag test on mobile
  const region = pageM.locator("[aria-label='Industries']");
  const box = await region.boundingBox();
  await pageM.mouse.move(box.x + box.width - 30, box.y + box.height / 2);
  await pageM.mouse.down();
  await pageM.mouse.move(box.x + 30, box.y + box.height / 2, { steps: 10 });
  await pageM.mouse.up();
  await pageM.waitForTimeout(600);
  await pageM.screenshot({ path: `${outDir}/cardfix-mobile-dragged.png` });
  await ctxM.close();

  await browser.close();
  console.log(errors.length ? "ERRORS:\n" + errors.join("\n") : "NO CONSOLE ERRORS");
})();
