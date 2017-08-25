var PageAv = function () {
    var clickEnterInAccount = element(by.css('a[href="/login"]')),
     fieldLogin = element(by.id('login')),
     fieldPassword = element(by.id('password')),
     checkBoxRemember = element(by.id('remember')),
     clickEnterOnSite = element(by.name('submit')),
     accountField = element(by.className('form-item js-form-item')),
     passField = element(by.className('box-form-item js-form-item'));

    this.goToWebsiteAv = function () {
        browser.get('http://www.av.by');

    };

    this.clickEnterAv = function () {
        clickEnterInAccount.click();
    };

    this.fillFieldLog = function (Account) {
        fieldLogin.sendKeys(Account);
    };

    this.fillFieldPass = function (Password) {
        fieldPassword.sendKeys(Password);

    };

    this.clickCheckBoxRem = function () {
        checkBoxRemember.click();

    };

    this.clickEnterSiteAv = function () {
        clickEnterOnSite.click();

    };

     this.accField = function () {
          return accountField.getAttribute('class');
    };

    this.passwordField = function () {
        return passField.getAttribute('class');
    };

    this.checkFieldAccount = function () {
        return fieldLogin.getAttribute('value');
    };

    this.checkFieldPassword = function () {
        return fieldPassword.getAttribute('value');
    };

    this.checkCheckboxEnable = function () {
        return checkBoxRemember.getAttribute('checked');
    };

    this.checkEnterButton = function () {
        return clickEnterOnSite.getAttribute('class');
    };

}
module.exports = PageAv;
