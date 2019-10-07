const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  let msg;
  if (isLoginValid(login) === false) {
    msg = 'Ошибка! Логин должен быть от 4 до 16 символов';
  } else if (isLoginUnique(allLogins, login) === false) {
    msg = 'Такой логин уже используется!';
  } else {
    allLogins.push(login);
    msg = 'Логин успешно добавлен!';
  }

  return console.log(msg);
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// ---OR---
// if (isLoginValid(login) === false) - где isLoginValid(login) равен неправдивости
// if (!isLoginValid(login)) - где isLoginValid(login) - (!неправдив)

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//   return login.length >= 4 && login.length <= 16;
// };

// const isLoginUnique = function (allLogins, login) {
//   return allLogins.includes(login);
// };

// const addLogin = function (allLogins, login) {
//   let msg;
//   if (!isLoginValid(login)) {
//     msg = 'Ошибка! Логин должен быть от 4 до 16 символов';
//   } else if (!isLoginUnique(allLogins, login)) {
//     msg = 'Такой логин уже используется!';
//   } else {
//     allLogins.push(login);
//     msg = 'Логин успешно добавлен!';
//   }

//   return console.log(msg);
// };

// // Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
