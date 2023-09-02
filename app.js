let inputPrice = document.getElementById('input-price');
let inputWeight = document.getElementById('input-weight');
let result = document.getElementById('result');
let listContainer = document.getElementById('list-container');

function calculatePricePerUnit() {
  let price = parseFloat(inputPrice.value);
  let weight = parseFloat(inputWeight.value);

  if (isNaN(price) || isNaN(weight)) {
    result.innerHTML = 'Please enter valid numbers for price and weight.';
    return;
  }

  let value = price / weight;
  result.innerHTML = 'Price per unit :' + value.toFixed(2) + '/unit';
  let li = document.createElement('li');
  li.textContent = result.innerHTML;
  listContainer.appendChild(li);

  let span = document.createElement('span');
  span.innerHTML = '\u00d7';
  li.appendChild(span);

  inputPrice.value = '';
  inputWeight.value = '';
}
listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
  }
});
