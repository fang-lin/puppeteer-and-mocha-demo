module.exports = () => {

  it('goto /failure.html', async () => {
    const url = await page.url();
    expect(url).to.equal('http://localhost:8080/failure.html');
  });

  it('title should be "Failure!"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Failure!');
    await page.screenshot({
      path: `screenshots/failure.plot.png`,
      fullPage: true
    });
  });
};
