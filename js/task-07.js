const refs = {
    inputEl: document.querySelector("#font-size-control"),
    spanEl: document.querySelector("#text")
}

const increaseHandler = () => {
    const textSize = refs.inputEl.value;

    return refs.spanEl.style.fontSize = `${textSize}px`;
    }

refs.inputEl.addEventListener("input", increaseHandler);