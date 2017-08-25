
var PageAd = require('../PageObject/PageObjCars');
var data = require('../data/data.json');
require('jasmine2-custom-message');

describe('Interaction with av.by', function () {

    browser.waitForAngularEnabled(true);

    var avPageAd = new PageAd();

    beforeAll(function () {

    });

    it('Click "Sale cars" and check that it is available.', function () {

        since('"Sale cars" is not available').
           expect(avPageAd.checkSaleCarsButton()).
               toBeFalsy();

        avPageAd.clickButtonCarsSell();

        browser.sleep(3000);

    });

    it('Check car "Audi" is available and click on it.', function () {

        since('"Audi" is not available.').
           expect(avPageAd.checkAudi()).
              toBeTruthy();

        avPageAd.clickAudi();

        browser.sleep(3000);

    });

    it('Check the "R8" is available and click "R8". Check the bookmark is available and click.' +
        'Check the bookmark is select', function () {

        since('"R8" is not available').
            expect(avPageAd.checkAudiR8()).
               toBeTruthy();

        avPageAd.clickR8();

        since('Bookmark is not available.').
            expect(avPageAd.checkBookmark()).
               toBeTruthy();

        avPageAd.clickBook();

        browser.sleep(3000);

        since('Bookmark is not select').
            expect(avPageAd.checkBookmarkSelect()).
               toBeTruthy()

    });


    browser.waitForAngularEnabled(false);
});