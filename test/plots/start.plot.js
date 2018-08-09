module.exports = ({ baseURL }) => {

  it(`should open ${baseURL}`, async () => {
    await page.goto(baseURL);
    const url = await page.url();
    expect(url).to.equal(`${baseURL}/`);
  });

  it('title should be "Start"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Start');
    await page.screenshot({
      path: `screenshots/Start.plot.png`,
      fullPage: true
    });
  });

  it('click "Next" button', async () => {
    await page.waitFor('#next');
    const text = await page.$eval('#next', h1 => h1.innerText);
    expect(text).to.equal('Next');

    const navigationPromise = page.waitForNavigation();
    await page.click('#next');
    await navigationPromise;
  });
};
