const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener("blur", (event) => {
    
 if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
    
     return inputEl.classList.add('valid')
     
    }
    
    
    return inputEl.classList.add('invalid')
    
}); 