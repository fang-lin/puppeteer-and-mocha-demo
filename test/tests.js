const { expect } = require('chai');
const puppeteer = require('puppeteer');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser', 'expect']);

// puppeteer options
const opts = {
  headless: true,
  // slowMo: 20,
  ignoreHTTPSErrors: true,
  timeout: 10000
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
});
