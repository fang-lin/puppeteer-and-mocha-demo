const { expect } = require('chai');
const puppeteer = require('puppeteer');
const globalVariables = _.pick(global, ['browser', 'expect']);

// puppeteer options

const opts = {
  headless: false,
  slowMo: 100,
  timeout: 10000
};

// expose variables

before(async function () {
  global.expect = expect;
  global.browser = await puppeteer.launch(opts);
});

