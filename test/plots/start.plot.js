module.exports = () => {

  it('url should correct', async () => {
    await page.goto('http://localhost:8080');
    const url = await page.url();
    expect(url).to.equal('http://localhost:8080/');
  });

  it('title should be "Start"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Start');
    await page.screenshot({
      path: `screenshots/start.plot.png`,
      fullPage: true
    });
  });

  it('click "next" button', async () => {
    await page.waitFor('#next');
    const text = await page.$eval('#next', h1 => h1.innerText);
    expect(text).to.equal('Next');

    const navigationPromise = page.waitForNavigation();
    await page.click('#next');
    await navigationPromise;
  });
};
