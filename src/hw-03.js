// Завдання 1.
const firstNum = Number(prompt("Введіть перше число"));
const secondNum = Number(prompt("Введіть ще одне число"));
const numberToCheck = 5;
if ((firstNum + secondNum) % numberToCheck === 0) {
  alert(
    "Сума чисел " + firstNum + " i " + secondNum + " кратна " + numberToCheck
  );
} else {
  alert("Сума не кратна " + numberToCheck);
}

// Завдання 2.
const itemMenu = Number(
  prompt("Виберіть напій з меню: \n 1 - чай \n 2 - кава \n 3 - сік \n 4 - вода")
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

// Завдання 3.
const amount = Number(prompt("Введіть суму покупки"));
let discontAmount;
const discont3 = 3;
const discont5 = 5;
if (amount > 800) {
  discontAmount = amount - (amount / 100) * discont5;
  alert("Сума вашої покупки зі знижкою " + discont5 + "% - " + discontAmount);
} else if (amount < 800 && amount >= 500) {
  discontAmount = amount - (amount / 100) * discont3;
  alert("Сума вашої покупки зі знижкою " + discont3 + "% - " + discontAmount);
} else if (amount > 0 && amount < 500) {
  discontAmount = amount;
  alert("Сума вашої покупки - " + discontAmount);
} else {
  alert("Введено некоректні дані");
}

// Завдання 4.
const number1 = Number(prompt("Введіть перше число"));
const number2 = Number(prompt("Введіть ще одне число"));
console.log(number1 % number2 === 0 || false);
