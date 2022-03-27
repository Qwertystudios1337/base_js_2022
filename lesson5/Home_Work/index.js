// 1
// Function Expression
// const squareNumber = function(number) {
//   return number*number;  
// }
// const newNumber = 3;
// console.log(squareNumber(newNumber));
// Funtion Declaration
// function squareNumber(number) {
// return number**2;
// }
// number = 9;
// console.log(squareNumber(number));
// const squareNumber = (number) => number**2;
// newNumber = 8;
// console.log(squareNumber(newNumber));
// 2
// function sumNumb(num1, num2) {
//     return num1+num2;
// }
// console.log(sumNumb(3,2));

// const sumNumb=function(num1,num2){
//     return num1+num2;
// }
// console.log(sumNumb(2,9));

// const sumNumb = (num1,num2) => num1+num2;
// console.log(sumNumb(4,2));

// 3
// function declaration
// function calcValue(num1,num2,num3) {
// return (num1-num2)/num3;
// }
// console.log(calcValue(10,2,4));
// function expression
// const calcValue=function(num1,num2,num3) {
//     return (num1-num2)/num3;
// }
// console.log(calcValue(40,10,15));

// const calcValue = (num1,num2,num3) =>(num1-num2)/num3;
// console.log(calcValue(100,20,10));

// 4
// const weekDay = (dayNumber) => {
//   switch (dayNumber) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     default:
//       return "Воскресенье";
//   }
// };
// console.log(weekDay(5));

// const weekDay = function(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       return "Понедельник";
//     case 2:
//       return "Вторник";
//     case 3:
//       return "Среда";
//     case 4:
//       return "Четверг";
//     case 5:
//       return "Пятница";
//     case 6:
//       return "Суббота";
//     default:
//       return "Воскресенье";
//   }
// };
// console.log(weekDay(7));

// 5
// function numberCompare(num1,num2) {
//   if (num1===num2) {
//   return true
//   }else {
//     return false;
//   }
// }
// console.log(numberCompare('4',4));

// const numberCompare = function(num1,num2) {
//   if (num1===num2) {
//     return true
//     }else {
//       return false;
//     }
//   }
//   console.log(numberCompare(3,4));

// 6
// const sumCheck = (num1,num2)=> {
//   if (num1+num2>10) {
//     return true;
//   }else {
//     return false;
//   }
// }
// console.log(sumCheck(10,4));

// 7
// isPositiveNumber = function(num) {
//   if (num>0){
//     return true;
//   }else {
//     return false;
//   }
// }
// console.log(isPositiveNumber(-1));

// const isPositiveNumber = (num) => {
//   if (num>0){
//     return 'True';
//   }else {
//     return 'False';
//   }
// }
// console.log(isPositiveNumber('2'));


// 8
// newNumber = 11;
// const isNumberInRange = function(num) {
//   if(num>0&&num<10){
//     return true;
//   }else {
//     return false;
//   }
// }
// console.log(isNumberInRange(newNumber));

// 9
// const newArray = [-1,7,7,14,102,5];
// let arrayFromNewArray = [];
// const isNumberInRange = function(arr) {
//   for (let i=1; i<=arr.length; i++) {
//     if(arr[i]>0&&arr[i]<10){
//      arrayFromNewArray.push(newArray[i]);
//     }
//   }
//   return arrayFromNewArray;
// }
// console.log(isNumberInRange(newArray));

// // 10 и 11
// function getDigitsSum(num) {
//   let sum = 0;
//   let str = String(num);
//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }
//   return sum;
// }
// // const newValue = 359;
// // console.log(getDigitsSum(Number(newValue)));
// const lastYear = 2020;
// for (let i=1; i<=lastYear; i++) {
//   if (getDigitsSum(i)===13) {
//     console.log(i);
//   }
// }

// 12+13
// const isEven = (num) => {
// if (num%2===0) {
//   return true;
// }else {
//   return false;
// }
// }
// // num=105;
// // console.log(isEven(num));

// const newArray = [1,5,7,9,5,3];
// const arrayFromNeArray = [];
// for (i=0; i<newArray.length; i++) {
// if (isEven(newArray[i])) {
//   arrayFromNeArray.push(newArray[i]);
// }
// }
// console.log(arrayFromNeArray);

// 14
// const outputArray = [];
// const getDivisors = (num) => {
//   for (i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       outputArray.push(i);
//     }
//   }
//   return outputArray;
// };
// console.log(getDivisors(40));

// 15
// let sum = 0;
// let sumAfterSum = 0;
// const sumRange = (num) => {
//   let str = String(num);
//   for (i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }
// if (sum<=9) {console.log(sum);
// }else {
//   let sumStr = String(sum);
//   for (let j =0; j<sumStr.length; j++) {
//     sumAfterSum+=Number(sumStr[j]);
//   }
//   console.log(sumAfterSum);
// }
// }
// const number = 269949;
// (sumRange(number));

// 15 решение от препода

const countRecJobs = (num) => {
  let countRec = 0;

  const testRecursion = (num) => {
    const digitsSum = getDigitsSum(num);

    if (digitsSum > 9) {
      countRec += 1;
      testRecursion(num - 1);
      return `Рекурсия отработала: ${countRec}. ${digitsSum}`;
    }
    return digitsSum;
  };

  return testRecursion(num);
};

console.log(countRecJobs(269949));


// 16
// const newString = 'abcdcba';
// const isPalindrom = (word) => {
//   let reverseNewString = "";  
//   for (let i=word.length-1; i>=0; i--) {
//       reverseNewString +=String(word[i]);
//     }
//     if (newString===reverseNewString) {
//       return "Палиндром";
//     }else {
//       return 'Не палиндром';
//     }
// };
// console.log(isPalindrom(newString));

// Пример с метками и выходом из цикла
// outerloop:
// for (var i = 0; i < 3; i++)
// {
//  console.log(i);
//   for (var j = 0; j < 5; j++)
//   {
//     console.log(j);
//     if (i == 1)
//     break;
//     if (j == 3)
//     continue outerloop;
   
//    }
// }




