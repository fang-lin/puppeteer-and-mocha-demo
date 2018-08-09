module.exports = ({ baseURL }) => {

  it(`should open ${baseURL}/failure.html`, async () => {
    const url = await page.url();
    expect(url).to.equal(`${baseURL}/failure.html`);
  });

  it('title should be "Failure!"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Failure!');
    await page.screenshot({
      path: `screenshots/Failure.plot.png`,
      fullPage: true
    });
  });
};
