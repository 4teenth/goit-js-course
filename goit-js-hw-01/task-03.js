const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userData = prompt('Введите пароль!');

if (userData === null) {
  message = 'Отменено пользователем!';
} else if (userData === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);

// OR---

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// const userData = prompt('Введите свой пароль');

// switch (userData) {
//   case null:
//     message = 'Отменено пользователем!';
//     break;

//   case ADMIN_PASSWORD:
//     message = 'Добро пожаловать!';
//     break;

//   default:
//     message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

// OR---

// const CANCEL = 'Отменено пользователем!';
// const SUCCESS = 'Добро пожаловать!';
// const DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const userData = prompt('Please enter your password');

// if (userData === null) {
//   message = CANCEL;
// // (userData === null && message === CANCEL);
// } else if (userData === ADMIN_PASSWORD) {
//   message = SUCCESS;
// // (userData === ADMIN_PASSWORD && message === SUCCESS);
// } else {
//   message = DENIED;
// // ((userData !== ADMIN_PASSWORD && userData !== null) && message === DENIED);
// }

// alert(message);
