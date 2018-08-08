module.exports = () => {

  it('goto /success.html', async () => {
    const url = await page.url();
    expect(url).to.equal('http://localhost:8080/success.html');
  });

  it('title should be "Success!"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Success!');
    await page.screenshot({
      path: `screenshots/success.plot.png`,
      fullPage: true
    });
  });
};
