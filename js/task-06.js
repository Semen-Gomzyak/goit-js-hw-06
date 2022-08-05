const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener("blur", (event) => {

 if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
     if (inputEl.classList.contains('invalid')) {
        inputEl.classList.remove('invalid')
    }
     return inputEl.classList.add('valid')
     
    }
    
    
    return inputEl.classList.add('invalid')
    
}); 