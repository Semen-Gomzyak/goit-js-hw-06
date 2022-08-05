const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', handleSubmit);
 
function handleSubmit(event) {
  event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.currentTarget;

  const user = {
    Email: email.value,
    Password: password.value
  }

  if (email.value === "" || password.value === "") {
    return window.alert("Пожалуйста, заполните все поля!");
  }
  
  console.log(user);
  event.currentTarget.reset();
}








 

 