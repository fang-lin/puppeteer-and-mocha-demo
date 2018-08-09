const { expect } = require('chai');
const puppeteer = require('puppeteer');
const { pick } = require('lodash');
const globalVariables = pick(global, ['browser', 'expect', 'page']);

// puppeteer options
const opts = {
  headless: false,
  // slowMo: 20,
  ignoreHTTPSErrors: true,
  timeout: 5000
};

// expose variables
before(async () => {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
  global.page = await browser.newPage();
});

// close browser and reset global variables
after(() => {
  browser.close();

  global.browser = globalVariables.browser;
  global.expect = globalVariables.expect;
  global.page = globalVariables.page;
});
