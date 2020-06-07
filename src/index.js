import checkScrollY from '../js/show-head';
import settingsSlider from '../js/slider';
import getPosts from '../js/last-posts';

settingsSlider();

getPosts();

AOS.init({
    once: true
});

checkScrollY();





