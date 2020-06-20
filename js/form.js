
let form = document.querySelector('#modalCallback'),
    succesForm = document.querySelector('#modalCallback__success');

export default function sendForm() {
    document.forms.callback.onsubmit = function(e) {
        e.preventDefault();
    
        const data = {
            userName : encodeURIComponent(document.forms.callback.name),
            userNumber : encodeURIComponent(document.forms.number)
        };
    
       
        let request = new XMLHttpRequest();
    
        request.open('POST', './form.php')
    
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
        request.onreadystatechange = function() {
            if(request.readyState === 4 && request.status === 200) {
                if(form.classList.contains('show')){
                    form.classList.remove('show');
                }
            }
        }

        request.send(data);
    }
    
}


