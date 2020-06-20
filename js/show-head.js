let menu = document.querySelector('.header__hoisting-head');
export default function checkScrollYHead() {
  document.addEventListener('scroll', function () {

        if(pageYOffset > 500) {
             menu.classList.add('show__head');
        }
        else {
            menu.classList.remove('show__head');
        }
  })
}