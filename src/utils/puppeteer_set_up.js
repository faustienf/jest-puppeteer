const puppeteer = require('puppeteer'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

const width = 1920;
const height = 1080;
const isDebug = process.env.DEBUG === 'enable';
const testDocumentPath = path.resolve(__dirname, '../../build/demo/index.html');

module.exports = async () => {
  const options = isDebug
    ? {
      headless: false,
      slowMo: 50,
      args: [`--window-size=${width},${height}`],
    }
    : {};

  const browser = await puppeteer.launch(options);
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(`file://${testDocumentPath}`, { waitUntil: 'load' });

  global.BROWSER = browser;
  global.PAGE = page;
};
