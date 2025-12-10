const a = 123;
const b = 789;
console.log(a * b);

const c = 12345;
const d = 5;
console.log(c / d);

const e = 15948;
const f = 987654;
console.log(e + f);

const number = 11;
const isTrue = true;
const programLang = "java script";
const numberString = "100";
console.log(number, isTrue, programLang, numberString);


let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num ++;
num --;

let userNumber = prompt('Введіть число');
alert(`Якщо ${userNumber} піднести до квадрату, то отримаємо ${userNumber *= userNumber}`);

const firstNumber = Number(prompt('Введіть перше число'));
const secondNumber = Number(prompt('Введіть друге число'));
alert(`Середнє арифметичне ${firstNumber} і ${secondNumber} буде ${(firstNumber+secondNumber)/2}`);

const minutes = Number(prompt('Введіть кількість хвилин, щоб отримати результат у секундах'));
alert(`В секундах це буде ${minutes * 60}`);

const greeting = 'Hello,';
const userName = prompt('Як вас звати?');
alert(greeting + ' ' + userName + '!')