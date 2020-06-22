import checkScrollYHead from '../js/show-head';
import settingsSlider from '../js/slider';
import getPosts from '../js/last-posts';
import settingMobMenu from '../js/mobile-menu';
import setSlickSlider from '../js/slick-slider';
import sendForm from '../js/form';
import initMask from '../js/mask-input';
import checkInput from '../js/input-styiling';
import aos from "aos";
let succesForm = $('#modalCallback__success .modal__callback__button');

setSlickSlider();
settingsSlider();



getPosts();

aos.init({
    once: true
});

checkScrollYHead();

settingMobMenu();

sendForm();

initMask();

checkInput();

succesForm.on('click', function () {
    succesForm.modal('hide');
})

$('[data-toggle="modal"]').on('click', function () {
    $('html').addClass('overflow-hidden')
})

$('.modal').on('hide.bs.modal', function () {
    $('html').removeClass('overflow-hidden')
})

