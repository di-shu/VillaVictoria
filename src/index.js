import checkScrollYHead from '../js/show-head';
import settingsSlider from '../js/slider';
import getPosts from '../js/last-posts';
import checkScrollYNav from '../js/show-nav';

settingsSlider();

getPosts();

AOS.init({
    once: true
});

checkScrollYHead();
checkScrollYNav();




