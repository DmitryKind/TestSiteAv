        var PageAv = require('../PageObject/PageObjAccount');
        var data = require('../data/data.json');
        require('jasmine2-custom-message');

        describe('Interaction with av.by', function () {

    browser.waitForAngularEnabled(true);

    var avHomePage = new PageAv();

    beforeAll(function () {

        avHomePage.goToWebsiteAv();

    });

    it('Click "EnterInLogin", fill account fields and check that fields are available. ' +
        'Check the data was filled correctly. Check that button "Enter" is available', function () {

        avHomePage.clickEnterAv();

     since('Field of account name is not available').
        expect(avHomePage.accField()).
           toBeTruthy();

        avHomePage.fillFieldLog(data.Account);

        since('Account name is not correct.')
           expect(avHomePage.checkFieldAccount()).
              toEqual(data.Account);

        since('Field of user password is not available')
            expect(avHomePage.passwordField()).
               toBeTruthy();

        avHomePage.fillFieldPass(data.Password);

        since('Password is not correct')
            expect(avHomePage.checkFieldPassword()).
               toEqual(data.Password);

        since('Button is not available')
            expect(avHomePage.checkEnterButton()).
                toBeTruthy();

         browser.sleep(3000);

     });

     it('Click checkbox "Remember Me". Check the checkbox and button "Enter" are available ', function (){

        avHomePage.clickCheckBoxRem();

        since('Checkbox disable').
            expect(avHomePage.checkCheckboxEnable()).
              toBeFalsy();

       since('Button "Enter" is not available')
           expect(avHomePage.checkEnterButton()).
              toBeTruthy();

        avHomePage.clickEnterSiteAv();

        browser.sleep(3000);

    });

    browser.waitForAngularEnabled(false);
});