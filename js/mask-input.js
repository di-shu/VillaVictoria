export default function initMask() {
    jQuery(function($){
        $('.date').mask('99/99/9999');
        $('.phone').mask('+38 (999) 999-9999');
        $('.phoneext').mask("(999) 999-9999? x99999");
        $(".tin").mask("99-9999999");
        $(".ssn").mask("999-99-9999");
        $(".product").mask("a*-999-a999");
        $(".eyescript").mask("~9.99 ~9.99 999");
    });
}