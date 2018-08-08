module.exports = ({ answer }) => {

  it('goto /question-1.html', async () => {
    const url = await page.url();
    expect(url).to.equal('http://localhost:8080/question-1.html');
  });

  it('title should be "Question 1"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Question 1');
  });

  it(`input value should be "${answer}"`, async () => {
    await page.waitFor('#answer-1');
    await page.type('#answer-1', answer);
    const value = await page.$eval('#answer-1', input => input.value);
    expect(value).to.equal(answer);
    await page.screenshot({
      path: `screenshots/question-1.plot.png`,
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
