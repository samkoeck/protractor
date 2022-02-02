const {
  $,
  browser
} = require('protractor');

describe('Rpsls', function () {
  //homepage
  let inputName = element(by.id("name"))
  let startButton = element(by.id("login-button"))
  let registerNoPlay = element(by.xpath('/html/body/app-root/div[1]/app-home/div[1]/div[2]/button'))
  let guideButton = element(by.xpath('/html/body/app-root/div[1]/i'))
  let closeGuide = element(by.xpath('/html/body/app-root/div[2]/app-info/div/div/div[1]/span'))

  // registerpage not playing
  let firstNameText = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[1]/input'))
  let lastNameText = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[2]/input'))
  let emailText = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[3]/input'))
  let phoneNumberText = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[4]/input'))
  let studiesText = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[5]/input'))
  let studieRadio1 = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[6]/label[1]/input'))
  let studieRadio2 = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[6]/label[2]/input'))
  let studieRadio3 = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[6]/label[3]/input'))
  let gdpr1 = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[7]/input[1]'))
  let gdpr2 = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[7]/input[2]'))
  let register = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div/form/div[8]/button'))

  //register page with playing
  let firstNameTextPlay = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[1]/input'))
  let lastNameTextPlay = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[2]/input'))
  let emailTextPlay = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[3]/input'))
  let phoneNumberTextPlay = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[4]/input'))
  let studiesTextPlay = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[5]/input'))
  let studieRadio1Play = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[6]/label[1]/input'))
  let studieRadio2Play = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[6]/label[2]/input'))
  let studieRadio3Play = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[6]/label[3]/input'))
  let gdpr1Play = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[7]/input[1]'))
  let gdpr2Play = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[7]/input[2]'))
  let registerPlay = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[8]/button'))
  let updateButton = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[1]/div/div/button'))
  let updatePhoneInput = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[1]/input'))
  let updateScoreButton = element(by.xpath('/html/body/app-root/div[1]/app-registration/div/div[2]/form/div[2]/button'))

  //gamepage
  let getChoice1 = element(by.id("option-1"))
  let getChoice2 = element(by.id("option-2"))
  let getChoice3 = element(by.id("option-3"))
  let getChoice4 = element(by.id("option-4"))
  let getChoice5 = element(by.id("option-5"))
  let registerGamePageButton = element(by.xpath('/html/body/app-root/div[1]/app-game/div/div/div[2]/button[2]'))

  // game finished
  let endText = element(by.xpath('/html/body/app-root/div[1]/app-game/div/div/h1'))
  let nextRound = element(by.xpath('/html/body/app-root/div[1]/app-game/div/div/div[2]/button[1]'))


  let alive = 0;
  let phone = 0;

  beforeEach(function () {
    browser.get('http://localhost:4200');
    browser.waitForAngularEnabled(false);
  });

  it('play till lost and register', function () {
    expect(inputName.getText()).toEqual('');

    play();

    lastNameTextPlay.sendKeys('Koeck');
    emailTextPlay.sendKeys('sam.koeck@bignited.be');
    phone = randomIntFromInterval(1, 100000000)
    phoneNumberText.sendKeys(phone);
    studiesTextPlay.sendKeys('hbo5 programmeren');
    let choice = randomIntFromInterval(1, 3);
    if (choice == 1) {
      studieRadio1Play.click();
    } else if (choice == 2) {
      studieRadio2Play.click()
    } else if (choice == 3) {
      studieRadio3Play.click()
    }
    let gdprRandom = randomIntFromInterval(1, 2);
    if (gdprRandom == 1) {
      gdpr1Play.click();
    } else if (gdprRandom == 2) {
      gdpr2Play.click()
    }
    registerPlay.click();
    browser.sleep(2000)

  })

  it('register not played', function () {
    browser.sleep(1000)
    browser.executeScript('window.scrollTo(0, document.body.scrollHeight);').then(function () {
      browser.sleep(1000)
      registerNoPlay.click()
    })
    firstNameText.sendKeys('Sam');
    lastNameText.sendKeys('Koeck');
    emailText.sendKeys('sam.koeck@bignited.be');
    phoneNumberText.sendKeys(randomIntFromInterval(1, 100000000));
    studiesText.sendKeys('hbo5 programmeren');
    let choice = randomIntFromInterval(1, 3);
    if (choice == 1) {
      studieRadio1.click();
    } else if (choice == 2) {
      studieRadio2.click()
    } else if (choice == 3) {
      studieRadio3.click()
    }
    let gdprRandom = randomIntFromInterval(1, 2);
    if (gdprRandom == 1) {
      gdpr1.click();
    } else if (gdprRandom == 2) {
      gdpr2.click()
    }
    register.click();

  })

  it('open guide and close', function () {
    guideButton.click();
    browser.sleep(2000)
    closeGuide.click();
    browser.sleep(2000)
  })

  it('update score after playing', function () {
    play();
    updateButton.click();
    updatePhoneInput.sendKeys(phone);
    updateScoreButton.click();
    browser.sleep(2000)
  })



  //functions
  function isAlive(number) {
    if (number == 1) {

    } else {
      endText.getText().then(function (actualText) {
        if (actualText.indexOf('Bummer') !== -1) {
          alive++;
        } else if (actualText.indexOf('You won') !== -1 || actualText.indexOf("It's a tie") !== -1) {
          nextRound.click();
          clickRandomChoice();
          browser.sleep(2000);
          return isAlive(alive);
        }
      })
    }
  }

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function clickRandomChoice() {
    let choice = randomIntFromInterval(1,5);
    if (choice == 1) {
      getChoice1.click();
    } else if (choice == 2) {
      getChoice2.click()
    } else if (choice == 3) {
      getChoice3.click()
    } else if (choice == 4) {
      getChoice4.click()
    } else if (choice == 5) {
      getChoice5.click()
    }
  }

  function play() {
    inputName.sendKeys('Sam');
    startButton.click();

    clickRandomChoice();
    browser.sleep(2000)

    isAlive(alive);

    registerGamePageButton.click();
    browser.sleep(2000)
  }

});