const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    total: document.querySelector('#value')
}
let counterValue = 0;
const incrementTotal = () => {
    counterValue += 1;

    return refs.total.textContent = counterValue;
    }

const decrementTotal = () => {
    counterValue -= 1;

 return refs.total.textContent = counterValue;
    }

refs.decrementBtn.addEventListener('click', decrementTotal)
refs.incrementBtn.addEventListener('click', incrementTotal);

