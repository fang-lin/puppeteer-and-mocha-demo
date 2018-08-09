module.exports = ({ answer, baseURL, pageURL, title, question, inputSelector }) => {

  it(`should open ${baseURL}/${pageURL}`, async () => {
    const url = await page.url();
    expect(url).to.equal(`${baseURL}/${pageURL}`);
  });

  it(`title should be "${title}"`, async () => {
    await page.waitFor('h1');
    const titleText = await page.$eval('h1', h1 => h1.innerText);
    expect(titleText).to.equal(title);
  });

  it(`question should be "${question}"`, async () => {
    await page.waitFor('label');
    const questionText = await page.$eval('label', label => label.innerText);
    expect(questionText).to.equal(question);
  });

  it(`input answer "${answer}"`, async () => {
    await page.waitFor(inputSelector);
    await page.type(inputSelector, answer);
    const value = await page.$eval(inputSelector, input => input.value);
    expect(value).to.equal(answer);
    await page.screenshot({
      path: `screenshots/${title}.${answer}.plot.png`,
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
