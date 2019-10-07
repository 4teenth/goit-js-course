'use strict';

let input;
const numbers = [];
let total = 0;

let result;

while (input !== null) {
  input = prompt('Введите число:');
  const sign = Number(input);

  if (Number.isNaN(sign)) {
    alert('Было введено не число, попробуйте еще раз');
  } else if (sign !== 0) {
    numbers.push(sign);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}

result = `Общая сумма чисел равна ${total}`;

alert(result);
console.log(`Общая сумма чисел равна ${total}`);
