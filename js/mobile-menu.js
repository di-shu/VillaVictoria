
let menu = $('.hoisting__mobile-nav');
let closeMenu = $('.close__hoisting__mobile-nav');
let hoistingMenu = $('.header__hoisting-head');
let main = $('main');
let hoistingItems = $('.hoisting__mobile-nav .hoisting__nav__item');
export default function settingMobMenu(){
    $('.burger__menu').on('click', function () {
        menu.addClass('show__hoisting-menu');
        main.addClass('main__active');
        $('menu, html').addClass('block__screen');
        if(hoistingMenu.hasClass('show__head')) {
            hoistingMenu.removeClass('show__head');
        }
    })
    closeMenu.on('click', function () {
        menu.removeClass('show__hoisting-menu');
        main.removeClass('main__active');
        $('menu, html').removeClass('block__screen');
        if(pageYOffset > 500) {
            hoistingMenu.addClass('show__head');
        }

    })




}