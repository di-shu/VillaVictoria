const header = document.querySelector('.header__container__full');


export default function checkScrollY() {

    window.addEventListener('scroll', function() {
        if(pageYOffset < 500) {

            if(header.classList.contains('show__head')){
                header.classList.remove('show__head');
                header.classList.add('hide__head');
            }
        } else {
            if(header.classList.contains('hide__head')) {
                header.classList.remove('hide__head');
                header.classList.add('show__head');
            }
        }
    });
   
}