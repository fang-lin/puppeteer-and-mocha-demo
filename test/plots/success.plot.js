module.exports = ({ baseURL }) => {

  it(`should open ${baseURL}/success.html`, async () => {
    const url = await page.url();
    expect(url).to.equal(`${baseURL}/success.html`);
  });

  it('title should be "Success!"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Success!');
    await page.screenshot({
      path: `screenshots/Success.plot.png`,
      fullPage: true
    });
  });
};
