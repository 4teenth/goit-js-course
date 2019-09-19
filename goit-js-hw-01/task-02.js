const total = 100;
const ordered = 50;
let info;

if (ordered <= 0) {
  info = 'Выберите количество таваров';
} else if (ordered > total) {
  info = 'На складе недостаточно товаров!';
} else {
  info = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(info);
