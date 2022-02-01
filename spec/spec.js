const ElementFinder = require('protractor');

describe('Rpsls', function () {
  let inputName = element(by.id("name"))
  let startButton = element(by.id("login-button"))
  let getChoice1 = element(by.css('#option-1'))
  let getChoice2 = element(by.id("option-2"))
  let getChoice3 = element(by.css('div > div.flex > div:nth-child(3)'))
  let getChoice4 = element(by.id("option-4"))
  let getChoice5 = element(by.id("option-5"))
  let rockText = element(by.xpath('/html/body/app-root/div[1]/app-game/div/div/h1'))
  let retryButton = element(by.xpath('/html/body/app-root/div[1]/app-game/div/div/div[2]/button[1]'))
  var EC = protractor.ExpectedConditions;

  beforeEach(function () {
    browser.get('http://localhost:4200');
  });

  it('start game', async function () {
    await expect(inputName.getText()).toEqual('');
    await inputName.sendKeys('Sam');
    await startButton.click();
    await expect(rockText.getText()).toEqual("Ohno! You did not select a value, that's a shame... Your score is 0");
    await retryButton.click();
  })

  it('click image', async function () {
    await browser.get('http://localhost:4200/game/Roland');
    await $('#option-4').click();
  })

});