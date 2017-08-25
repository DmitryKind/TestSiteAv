var PageProfile = function () {

    var clickBookmarksProfile = element(by.css('a[href="https://av.by/users/bookmarks"]')),
        checkMyBookmark = element(by.className('listing-item-title')),
        clickAccOptions = element(by.css('a[href="https://av.by/users/edit"]')),
        clickChangePass = element(by.css('a[href="https://av.by/users/edit-password"]')),
        checkBookmarksEmpty = element(by.className('empty empty--bookmarks')),
        fieldOldPass = element(by.id('old_password')),
        fieldNewPass = element(by.id('password')),
        fieldrepeatNewPass = element(by.id('password_repeat')),
        clickSumbit = element(by.name('submit')),
        checkFieldOldPass =element(by.className('form-item-control')),
        checkFieldNewPass=element(by.className('form-item-control')),
        checkFieldRepeatNewPass=element(by.className('form-item-control'));


    this.clickBookProfile= function () {
        clickBookmarksProfile.click();

    };

    this.checkBookmarkDisplayed= function () {
        checkMyBookmark.isDisplayed();

    };


    this.clickOptionsAccount= function () {

        clickAccOptions.click();

    };

    this.clickPasswordEdit= function () {

        clickChangePass.click();

    };

    this.checkBookmarkIsEmpty= function () {
        checkBookmarksEmpty.getAttribute('class');

    };

    this.fillFieldOldPassword= function (Password) {
        fieldOldPass.sendKeys(Password);

    };

    this.fillFieldNewPassword= function (NewPassword) {
        fieldNewPass.sendKeys(NewPassword);

    };

    this.repeatFieldNewPassword= function (NewPassword) {
        fieldrepeatNewPass.sendKeys(NewPassword);

    };

    this.sumbitPassword= function () {
        clickSumbit.click();

    };


    this.checkFieldOldPassword= function () {
        checkFieldOldPass.getAttribute('class');

    };
    this.checkFieldNewPassword= function () {
        checkFieldNewPass.getAttribute('class');

    };
    this.checkFieldRepeatNewPassword= function () {
        checkFieldRepeatNewPass.getAttribute('class');

    };

}
module.exports = PageProfile;