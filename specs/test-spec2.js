var PageProfile = require('../PageObject/PageObjProfile');
var data = require('../data/data.json');
require('jasmine2-custom-message');

describe('Interaction with av.by', function () {

    browser.waitForAngularEnabled(true);

    var avPageProfile= new PageProfile();

    beforeAll(function () {

    });

    it('Click "Bookmarks" and check the bookmark is displayed.' +
        ' Delete bookmark and check the bookmarks are empty.', function () {

       var clickDeleteBookmark = element(by.className('bookmark-delete js-bookmark-member-area-delete'));

        avPageProfile.clickBookProfile();

        since('Bookmark is not displayed.').
           expect(avPageProfile.checkBookmarkDisplayed()).
             toBeFalsy();

      browser.actions().mouseMove(clickDeleteBookmark).click().perform();

        browser.sleep(3000);

      since('Bookmarks are not empty.').
         expect(avPageProfile.checkBookmarkIsEmpty()).
            toBeFalsy();

        browser.sleep(3000);

    });


    it('Click the "Account Options". Click the "Password Edit" and check the password fields are available. ' +
        'Fill new data in the fields.', function () {


        avPageProfile.clickOptionsAccount();
        avPageProfile.clickPasswordEdit();


        since('Field is not available.').
           expect(avPageProfile.checkFieldOldPassword()).
              toBeFalsy();
        since('Field is not available.').
           expect(avPageProfile.checkFieldNewPassword()).
             toBeFalsy();
        since('Field is not available.').
           expect(avPageProfile.checkFieldRepeatNewPassword()).
              toBeFalsy();

        avPageProfile.fillFieldOldPassword(data.Password);
        avPageProfile.fillFieldNewPassword(data.NewPassword);
        avPageProfile.repeatFieldNewPassword(data.NewPassword);

       // avPageProfile.sumbitPassword();

        browser.sleep(3000);


    });


    browser.waitForAngularEnabled(false);
});