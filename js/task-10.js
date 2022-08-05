const refs = {
  buttonCreateEl: document.querySelector("[data-create]"),
  buttonDestroyEl: document.querySelector("[data-destroy]"),
  inputEl: document.querySelector('input'),
  boxesEl: document.querySelector('#boxes'),
  userBoxEl: document.querySelector(".userBox")
}

refs.inputEl.addEventListener("input", getAmount);
refs.buttonCreateEl.addEventListener("click", createBoxes);
refs.buttonDestroyEl.addEventListener("click", destroyBoxes);

function getAmount() {
   return Number(refs.inputEl.value)
}


function createBoxes(amount) {
  amount = getAmount();
  
  for (let i = 0; i <= amount - 1; i += 1) {
    const sizeUserBox = i * 10 + 30;
    const randomColor = getRandomHexColor();
    const addDivElement = refs.boxesEl.insertAdjacentHTML
      ("beforeend", `<div style = "background-color: ${ randomColor }; width: ${ sizeUserBox }px; height: ${ sizeUserBox }px; ">`);
  }
}

function destroyBoxes() {
  return refs.boxesEl.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
