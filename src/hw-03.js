// Завдання 1.
const firstNum = +prompt('Введіть перше число');
const secondNum = +prompt('Введіть ще одне число');
const numberToCheck = 5;
if ((firstNum + secondNum) % numberToCheck === 0) {
    alert('Сума чисел ' + firstNum + ' i ' + secondNum + ' кратна ' + numberToCheck)
} else {
    alert('Сума не кратна ' + numberToCheck)
}

// Завдання 2.
const itemMenu = +prompt(
  "Виберіть напій з меню: \n 1 - чай \n 2 - кава \n 3 - сік \n 4 - вода"
);

switch (itemMenu) {
    case 1:
    alert("Ви обрали чай");
    break;
  case 2:
    alert("Ви обрали каву");
    break;
  case 3:
    alert("Ви обрали сік");
    break;
  case 4:
    alert("Ви обрали воду");
    break;

  default:
    alert("Такого напою у нас немає");
}

// // Завдання 3.
const amount = +prompt("Введіть суму покупки");
let discontAmount;
const discont3 = amount * 0.03;
const discont5 = amount * 0.05;
if (amount > 800) {
  discontAmount = amount - discont5;
  alert("Сума вашої покупки зі знижкою 5% - " + discontAmount);
} else if (amount < 800 && amount >= 500) {
  discontAmount = amount - discont3;
  alert("Сума вашої покупки зі знижкою 3% - " + discontAmount);
} else if (amount > 0 && amount < 500) {
  discontAmount = amount;
  alert("Сума вашої покупки - " + discontAmount);
} else {
  alert("Введено некоректні дані");
}

// Завдання 4.
const number1 = +prompt('Введіть перше число');
const number2 = +prompt('Введіть ще одне число');
console.log(number1 % number2 === 0)
