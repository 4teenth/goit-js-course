let input;
let total = 0;

let message;

while (true) {
  input = prompt('Введите число:');
  const result = `Общая сумма чисел равна ${total}`;

  if (input === null) {
    message = result;
    break;
  }

  total += Number(input);
}

alert(message);

// OR

// let input;
// let total = 0;

// let message;

// while (input !== null) {
//   input = prompt('Введите число');
//   total += Number(input);
// }

// message = `Общая сумма чисел равна ${total}`;

// alert(message);
