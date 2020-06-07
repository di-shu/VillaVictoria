const buttonPrev = document.querySelector('.main__gallery .carousel-control-prev');
const buttonNext = document.querySelector('.main__gallery .carousel-control-next');
const sliderItems = document.querySelectorAll('.main__gallery .carousel-item');
let countSlides = document.querySelector('.main__gallery .progress-number');
countSlides.innerHTML = `${1} / ${sliderItems.length}`;

const carousel = document.querySelector('.carousel-inner');

let progressbar = document.querySelector('.main__gallery .progress-bar');
progressbar.style.width = 1 / sliderItems.length *100 + '%';


export default function settingsSlider() {

    let temp = null;

    function handleEnd(evt) {
        console.log('move');


        for(let i = 0; i<sliderItems.length; i++){
            if(sliderItems[i].classList.contains('active')){
               
                countSlides.innerHTML = `${i+1} / ${sliderItems.length}`;
                progressbar.style.width = (i+1) / sliderItems.length *100 + '%';
                temp = i+1;
                if(i==0){
                    countSlides.innerHTML = `${i+2} / ${sliderItems.length}`;
                } else if((i+1)==sliderItems.length){
                    countSlides.innerHTML = `${1} / ${sliderItems.length}`;
                } else if(i==1) {
                    countSlides.innerHTML = `${sliderItems.length} / ${sliderItems.length}`;
                }
                console.log('move');
            }
        }

        // for(let i = 0; i<sliderItems.length; i++){
        //     if(sliderItems[i].classList.contains('active')){
        //         countSlides.innerHTML = `${i+1} / ${sliderItems.length}`;
        //         progressbar.style.width = (i+1) / sliderItems.length *100 + '%';
        //         temp = i+1;
        //     }
        //     if(temp == 1) {
        //         countSlides.innerHTML = `${sliderItems.length} / ${sliderItems.length}`;
        //         progressbar.style.width = sliderItems.length / sliderItems.length *100 + '%';
        //     } else {
        //         countSlides.innerHTML = `${temp-1} / ${sliderItems.length}`;
        //         progressbar.style.width = (temp-1) / sliderItems.length *100 + '%';
        //     }

        // }
    }

    carousel.addEventListener('touchend', handleEnd, false);

    buttonPrev.addEventListener('click', ()=>{

        for(let i = 0; i<sliderItems.length; i++){
            if(sliderItems[i].classList.contains('active')){
                countSlides.innerHTML = `${i+1} / ${sliderItems.length}`;
                progressbar.style.width = (i+1) / sliderItems.length *100 + '%';
                temp = i+1;
            }
            if(temp == 1) {
                countSlides.innerHTML = `${sliderItems.length} / ${sliderItems.length}`;
                progressbar.style.width = sliderItems.length / sliderItems.length *100 + '%';
            } else {
                countSlides.innerHTML = `${temp-1} / ${sliderItems.length}`;
                progressbar.style.width = (temp-1) / sliderItems.length *100 + '%';
            }

        }

    });


    buttonNext.addEventListener('click', ()=>{

        let temp = null;

        for(let i = 0; i<sliderItems.length; i++){
            if(sliderItems[i].classList.contains('active')){
                countSlides.innerHTML = `${i+2} / ${sliderItems.length}`;
                progressbar.style.width = (i+2) / sliderItems.length *100 + '%';
                temp = i+2;
                if(temp>sliderItems.length) {
                    countSlides.innerHTML = `${1} / ${sliderItems.length}`;
                    progressbar.style.width = 1 / sliderItems.length *100 + '%';
                }
            }
        }

    });

}
