const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', handleSubmit);
 
function handleSubmit(event) {
    event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return window.alert("Пожалуйста, заполните все поля!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}








 

 