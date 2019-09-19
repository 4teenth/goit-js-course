const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем';
const NOT_ENOUGHT_CREDITS = 'Недостаточно средств на счету!';

const userOrder = prompt('Сколько дроидов вы хотите купить?');

let message;
let totalPrice;

const userOrderQuantity = Number(userOrder);
const userBalance = credits - userOrderQuantity * pricePerDroid;

const BOUGHT = `Вы купили ${userOrderQuantity} дроидов, на счету осталось ${userBalance} кредитов.`;
const INCORRECT_VALUE = `Некорректный ввод, на счету осталось ${credits} кредитов.`;

if (userOrder === null) {
  message = CANCELED_BY_USER;
} else {
  totalPrice = userOrderQuantity * pricePerDroid;
  if (totalPrice > credits) {
    message = NOT_ENOUGHT_CREDITS;
  } else if (totalPrice < credits && totalPrice > 0) {
    message = BOUGHT;
  } else {
    message = INCORRECT_VALUE;
  }
}

console.log(message);
alert(message);
