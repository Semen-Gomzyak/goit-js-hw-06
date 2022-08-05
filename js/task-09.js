const refs = {
  spanEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
  bodyEl: document.querySelector("body")
}

refs.buttonEl.addEventListener('click', RandomHexColor);

function RandomHexColor() {
  const randomColor = getRandomHexColor();
  refs.spanEl.textContent = randomColor;
 refs.bodyEl.style= `background-color: ${randomColor}`;

  return randomColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    }`;
  
}

