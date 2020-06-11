export default function settingMobMenu(){
    $(document).ready(function() {
        $('.burger__menu').click(function(e){
            $('.burger__menu, .mobile__nav').toggleClass('menu__active');
            $('body, html').toggleClass('set__overflow');
            $('.burger__menu2').toggleClass('menu__active2');
            $('.mobile__nav a').click(function(e){
                if($('.burger__menu, .mobile__nav').hasClass('menu__active')&&$('body, html').hasClass('set__overflow')){
                    $('.burger__menu, .mobile__nav').removeClass('menu__active');
                    $('body, html').removeClass('set__overflow');
                    if($('.burger__menu2').hasClass('menu__active2')){
                        $('.burger__menu2').removeClass('menu__active2');
                    }
                    
                }
                
            })
            
        })

        $('.burger__menu2').click(function(e){
            $('.burger__toggle').addClass('burger__menu__pos');
        })
        
        $('.burger__toggle').click(function(e){
            if($('.burger__toggle').hasClass('burger__menu__pos')){
                $('.burger__toggle').removeClass('burger__menu__pos');
            }
        })
        
    });
}