const buttonPrev = document.querySelector('.main__gallery .carousel-control-prev');
const buttonNext = document.querySelector('.main__gallery .carousel-control-next');
const sliderItems = document.querySelectorAll('.main__gallery .carousel-item');
let countSlides = document.querySelector('.main__gallery .progress-number');
countSlides.innerHTML = `0${1} / 0${sliderItems.length}`;
const slider = document.getElementById('carouselExampleControls');

const carousel = document.querySelector('.carousel-inner');

let progressbar = document.querySelector('.main__gallery .progress-bar');
progressbar.style.width = 1 / sliderItems.length *100 + '%';


export default function settingsSlider() {
    

    for(let i = 0; i < sliderItems.length; i++){
        sliderItems[i].setAttribute('data-id', i+1);
    }

    function handleEnd () {

        
        setTimeout(()=>{
            for(let i =0; i < sliderItems.length; i++){
                
                if(sliderItems[i].classList.contains('active')){
                    if(i < 9){
                        countSlides.innerHTML = `${0}${sliderItems[i].getAttribute('data-id')} / ${0}${sliderItems.length}`;
                        progressbar.style.width = (sliderItems[i].getAttribute('data-id')) / sliderItems.length *100 + '%';
                    } else {
                        countSlides.innerHTML = `${sliderItems[i].getAttribute('data-id')} / ${sliderItems.length}`;
                        progressbar.style.width = (sliderItems[i].getAttribute('data-id')) / sliderItems.length *100 + '%';
                    }
                    
                }
            }
        },700)
       
    }

  

    carousel.addEventListener('touchend',handleEnd, false);


    buttonPrev.addEventListener('click', ()=>{

        setTimeout(()=>{
            for(let i =0; i < sliderItems.length; i++){
                
                if(sliderItems[i].classList.contains('active')){
                    if(i < 9){
                        countSlides.innerHTML = `${0}${sliderItems[i].getAttribute('data-id')} / ${0}${sliderItems.length}`;
                        progressbar.style.width = (sliderItems[i].getAttribute('data-id')) / sliderItems.length *100 + '%';
                    } else {
                        countSlides.innerHTML = `${sliderItems[i].getAttribute('data-id')} / ${sliderItems.length}`;
                        progressbar.style.width = (sliderItems[i].getAttribute('data-id')) / sliderItems.length *100 + '%';
                    }
                    
                }
            }
        },700)

    });


    buttonNext.addEventListener('click', ()=>{

        setTimeout(()=>{
            for(let i =0; i < sliderItems.length; i++){
                
                if(sliderItems[i].classList.contains('active')){
                    if(i < 9){
                        countSlides.innerHTML = `${0}${sliderItems[i].getAttribute('data-id')} / ${0}${sliderItems.length}`;
                        progressbar.style.width = (sliderItems[i].getAttribute('data-id')) / sliderItems.length *100 + '%';
                    } else {
                        countSlides.innerHTML = `${sliderItems[i].getAttribute('data-id')} / ${sliderItems.length}`;
                        progressbar.style.width = (sliderItems[i].getAttribute('data-id')) / sliderItems.length *100 + '%';
                    }
                    
                }
            }
        },700)

    });

}
