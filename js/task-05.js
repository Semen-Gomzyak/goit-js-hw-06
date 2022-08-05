const refs = {
    inputName: document.querySelector('#name-input'),
    textName: document.querySelector('#name-output')
}

refs.inputName.addEventListener("input", (event) => {
    if (refs.inputName.value.trim() === "") {
        return refs.textName.textContent = "Anonymous";
    
    }
    
    return  refs.textName.textContent = event.currentTarget.value;
});
