var PageAd = function () {

    var clickButtonSellAuto = element(by.css('a[href="//cars.av.by/"]')),
        clickAudiCar = element(by.css('a[href="https://cars.av.by/audi"]')),
        clickR8Audi = element(by.css('a[href="https://cars.av.by/audi/r8"]')),
        clickBookmark = element(by.className('listing-item-bookmark')),
        checkSellCars = element.all(by.className('nav-item')).first(),
        checkAudiCars = element.all(by.className('brandsitem brandsitem--primary')).get(2),
        checkAudiR8 = element.all(by.className('brandsitem brandsitem--primary')).get(27),
        checkBookSelect = element(by.className('bookmark  js-send-bookmark bookmark--active'));

    this.clickButtonCarsSell = function () {
        clickButtonSellAuto.click();

    };

    this.clickAudi = function () {
        clickAudiCar.click();

    };

    this.clickR8 = function () {
        clickR8Audi.click();

    };

    this.clickBook = function () {
        clickBookmark.click();

    };

    this.checkSaleCarsButton = function () {
        checkSellCars.getAttribute('class');

    };

    this.checkAudi = function () {
        return checkAudiCars.getAttribute('class');
    };

    this.checkAudiR8 = function () {
        return checkAudiR8.getAttribute('class');
    };

    this.checkBookmark = function () {
        return clickBookmark.getAttribute('class');
    };

    this.checkBookmarkSelect = function () {
        return checkBookSelect.getAttribute('class');
    };

}
module.exports = PageAd;

