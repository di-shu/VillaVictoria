import checkScrollYHead from '../js/show-head';
import settingsSlider from '../js/slider';
import getPosts from '../js/last-posts';
import checkScrollYNav from '../js/show-nav';
import settingMobMenu from '../js/mobile-menu';
import setSlickSlider from '../js/slick-slider';
import sendForm from '../js/form';
import initMask from '../js/mask-input';

setSlickSlider();
settingsSlider();

getPosts();

AOS.init({
    once: true
});

checkScrollYHead();
checkScrollYNav();

settingMobMenu();

sendForm();

initMask();


