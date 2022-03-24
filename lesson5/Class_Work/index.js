//  Function declaration - объявление функции
// Function Expression - функциональное выражение
// Arrow Function - стрелочная функция

// function showMessage() {
//     console.log('hello');
// }

// showMessage ();

// const user = "Vasya";

// function greetUser(name = 'гость') { //гость - это защита от "дурака". если переменная user задана null или undefinde, то будет 'гость'
//     console.log(`Привет, ${name}`)
// }

// greetUser(user);

// const user = {
//   name: "Vasya",
//   age: 18,
// };
// // Function Declaration
// function checkAcces(age) {
//   if (age < 18) {
//     showDeniedMsg();
//   } else {
//     showAllowedMsg();
//   }
// }
// // Function Expression
// const showAllowedMsg = function () {
//   console.log("Доступ разрешен");
// };

// const showDeniedMsg = function () {
//   console.log("Доступ запрещен");
// };

// checkAcces(user.age);

// Директива return

// function calcValue(a, b) {
//   return a + b;
// }

// const result = calcValue(3, 5);
 
// console.log(result);

// const user = {
//     name: "Vasya",
// };

// const greetMsg = 'Привет';

// function getName(user) {
//     return user.name||"гость";
// }

// function sayHi(text, name = getName()){
//     console.log(`${text}, ${name}!`)
// }
// sayHi(greetMsg, getName(user));

// Функция, используемая внутри функции, называется callback


// function showMsg() {
//    const myVar = 1;
//    console.log(myVar);
// }

// showMsg(); //область видимости переменной myVar внутри фигурных скобок.


// const user = undefined;
// function greetMsg (name ='гость') {
// console.log(`Привет, ${name}`)
// }
// greetMsg(user);

// const calcPower = function (num, power = 1) {
//   if (typeof num !== "number") {
//     const errorMsg = "Некорректные аргументы";
//     return errorMsg;
//   }
//   return num ** power;
// };
// const result = calcPower('2', 3);
// console.log(result);


// const calcAverageValue = function (arr) {
//    if(!arr.length) { 
//       return "Пустой массив";
//    }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// const newArray = [];
// console.log(calcAverageValue(newArray));

// Arrow functions
// const calcValue = (a,b) => a+b;
// тоже самое, что:
// const calcValue = (a,b)=>{
//   return a+b;
// };
// const result = calcValue(3,5);
// console.log(result);

// Практика
// let number = 5;
// const newPhrase = "Привет";
// function wordReplay(quantity){
//   for (let i=1; i<=quantity; i++) {
// console.log(newPhrase);
//   }
// }
// wordReplay(number);

// let number = 5;
// const wordReplay = function (quantity){
//   for (let i=1; i<=quantity; i++) {
//   console.log("Привет");
// }
// }
// wordReplay(5);

// const wordReplay = (quantity) => {
// for (let i=1; i<=quantity; i++) {
//   console.log("Привет");
// }
// }
// wordReplay(5);

const myChar = "а";

const isMyCharVowel = (char) => {
  const vowels = "ауоыэяюёие";

  if (vowels.includes(char)) {
    return "Гласная";
  }
  return "Не гласная";
};

console.log(isMyCharVowel(myChar));

