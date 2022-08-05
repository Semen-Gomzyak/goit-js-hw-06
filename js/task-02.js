const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients")

const makeItemOfListIngredients = ingredients.forEach(titleName => {
  const itemEl = document.createElement("li");
  itemEl.insertAdjacentHTML('beforeend', titleName);
  itemEl.classList.add("item");
  listEl.append(itemEl);
  
  return itemEl;
})


