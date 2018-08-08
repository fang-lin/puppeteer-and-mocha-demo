module.exports = ({ answer }) => {

  it('goto /question-2.html', async () => {
    const url = await page.url();
    expect(url).to.equal('http://localhost:8080/question-2.html');
  });

  it('title should be "Question 2"', async () => {
    await page.waitFor('h1');
    const title = await page.$eval('h1', h1 => h1.innerText);
    expect(title).to.equal('Question 2');
  });

  it(`input value should be "${answer}"`, async () => {
    await page.waitFor('#answer-2');
    await page.type('#answer-2', answer);
    const value = await page.$eval('#answer-2', input => input.value);
    expect(value).to.equal(answer);
    await page.screenshot({
      path: `screenshots/question-2.plot.png`,
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
