export default function settingMobMenu(){
    $(document).ready(function() {
        $('.burger__menu').click(function(e){
            $('.burger__menu, .mobile__nav').toggleClass('menu__active');
            $('body, html').toggleClass('set__overflow');

            $('.mobile__nav a').click(function(e){
                if($('.burger__menu, .mobile__nav').hasClass('menu__active')&&$('body, html').hasClass('set__overflow')){
                    $('.burger__menu, .mobile__nav').removeClass('menu__active');
                    $('body, html').removeClass('set__overflow');
                }
                
            })
            
        })
    });
}