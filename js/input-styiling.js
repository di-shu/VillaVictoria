let inputs = document.querySelectorAll('.modalCallbackForm__group input');
let labels = document.querySelectorAll('.modalCallback__input-label');
const button = document.querySelector('#modal__callback__button');
export default function checkInput() {
    for(let i = 0; i<inputs.length; i++){
        inputs[i].oninput = function () {
            if(inputs[i].value === null || inputs[i].value ===''){
                inputs[i].classList.add('input__required');
                labels[i].classList.add('show__label');
            } else {
                if(inputs[i].classList.contains('input__required')){
                    inputs[i].classList.remove('input__required');
                    if(labels[i].classList.contains('show__label')){
                        labels[i].classList.remove('show__label');
                    }
                }
            }
        }
    }

    button.addEventListener('click', ()=>{
        for(let i = 0; i<inputs.length; i++){
            if(inputs[i].value === null || inputs[i].value ===''){
                inputs[i].classList.add('input__required');
                labels[i].classList.add('show__label');
            }else {
                if(inputs[i].classList.contains('input__required')){
                    inputs[i].classList.remove('input__required');
                    if(labels[i].classList.contains('show__label')){
                        labels[i].classList.remove('show__label');
                    }
                }
            }
        }
    })
}