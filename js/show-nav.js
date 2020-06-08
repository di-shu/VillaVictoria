const nav = document.querySelector('.hoisting__container');


export default function checkScrollYNav() {

    window.addEventListener('scroll', function() {
        if(pageYOffset < nav.offsetTop) {

            if(nav.classList.contains('show__hoisting__container')){
                nav.classList.remove('show__hoisting__container');
                nav.classList.add('hide__hoisting__container');
            }
        } else {
            if(nav.classList.contains('hide__hoisting__container')) {
                nav.classList.remove('hide__hoisting__container');
                nav.classList.add('show__hoisting__container');
            }
        }
    });
   
}