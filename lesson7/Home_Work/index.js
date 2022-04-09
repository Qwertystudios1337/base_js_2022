// 1.	Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
// const arrayOfString = ["Vasya", "Petya", "Dn", "Dimon"];
// const arrayStringLength = arrayOfString.map(
//   (arrayLength) => arrayLength.length
// );
// console.log(arrayStringLength);

// let newArray =[];
// function arrayFrom (arr) {
// for (let i=0; i<arrayOfString.length;i++) {
//      newArray.push(arrayOfString[i].length);
// }
// return newArray;
// }
// console.log(arrayFrom(arrayOfString));

// 2.	Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), 
// которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

// let numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// const currentSums = (numbers) => {
//   let result = [];
//   numbers.reduce((sum, current, i) => {
//     return result[i] = sum + current;
//   }, 0);
// };
// console.log(currentSums(numbers));


// let result = [];

// const sumCount = (arr) =>{
// for (let i = 0; i < myNumbers.length; i++) {
//     let sum = 0;
//   for (let j = 0; (j <= i); j++) {
//     sum += myNumbers[j];
//   }
//   result.push(sum);
// }
// return result
// };
// console.log(sumCount(myNumbers));


// 3.	Напишите код, который получает из массива чисел новый массив, 
// содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const newArray = [1, 3, 6, 4, 0, 7];
// const outputArray = [];
// const resultArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       let newElement = "";
//       if (arr[i] + arr[j] === 7) {
//         newElement += "(" + arr[i] + ":" + arr[j] + ")";
//         outputArray.push(newElement);
//       }
//     }
//   }
//   return outputArray;
// };
// console.log(resultArray(newArray));

// 4.	Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
// const newString = "Как дела Как Дела это Новый Cadillac";
// let outputArray = [];
// const firstLetterArray = (str) => {
//   let middleArray = str.split(" ");
//   const outputArray = middleArray.map((firstLeter) => firstLeter[0]);
//   return outputArray;
// };
// console.log(firstLetterArray(newString));

// 5.	Напишите код, создащий массив, который будет состоять из строк, 
// состоящих из предыдущего, текущего и следующего символа строки str.

// const newString = "Как дела Как Дела это Новый Cadillac";
// let outputArray = [];
// const arrayFromString = (str) => {
//   let newElemet = "";
//   for (let i = 1; i < str.length - 1; i++) {
//     newElemet = str[i - 1] + str[i] + str[i + 1];
//     outputArray.push(newElemet);
//   }
//   return outputArray;
// };
// console.log(arrayFromString(newString));

// 6.	Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, 
// в массив цифр расположенных по убыванию их значений.

// let arrayOfNumbers = [5,1,9,5,7,34,87,4,8,3,9];
// console.log(arrayOfNumbers.sort(function(a, b) {return a-b}));

// 7.	Напишите код, объединяющий три массива цифр, и располагающий цифры, 
// в полученном массиве, в порядке убывания их значений через пробел.

// const myArray1 = [1, 4, 6, 8, 6, 4];
// const myArray2 = [4, 7, 9, 43, 6, 99, 55];
// const myArray3 = [66, 5, 8, 6];
// let resultArray = [];
// const uniteAndSort = (arr1, arr2, arr3) => {
//   let outputArray = arr1.concat(arr2, arr3);
// outputArray.sort((a,b) => b-a)
// return outputArray;
// };
// console.log(uniteAndSort(myArray1, myArray2, myArray3));

// 8.	Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// const newArray = [[1, 2, 3], [4, 5], [6]];
// const getOneDimensionalArray = newArray.flat(2);
// console.log(getOneDimensionalArray);
// const sumNewArray = getOneDimensionalArray.reduce((sum, currentNumber)=>sum+currentNumber)
// console.log(sumNewArray);

// 9.	Дан массив с числами. Не используя метода reverse 
// переверните его элементы в обратном порядке.
// const myArr = [3,6,88,4,5,6,78,89,33];
// let reverseMyArr = [];
// for (let i=myArr.length-1; i>=0; i--) {
//   reverseMyArr.push(myArr[i]);
// }
// console.log(reverseMyArr);

// 10.	Дан массив с числами. Узнайте сколько элементов с начала 
// массива надо сложить, чтобы в сумме получилось больше 10-ти.
// const myArr = [2,3,0,-4,5,6,78,89,33];
// const sumLargerTen = (arr) => {
//   let sum = arr[0];
//   let counter =1;
//   for (let i=1; i<arr.length-1;i++) {
// if (sum<=10) {
//   sum+=arr[i];
//   counter++
// }
// }
// return `Нужно сложить ${counter} элементов с начала массива. Сумма равна ${sum}`
// }
// console.log(sumLargerTen(myArr));

// 11.	Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, 
// а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
// const arrayFill = (value, quantity) => {
//   let outputArray = [];
//   for (let i=0; i<=quantity-1; i++) {
//     outputArray.push(value);
//   }
//   return outputArray;
// }
// console.log(arrayFill('x',5));

// 12. Написать функцию, которая будет принимать массив чисел, содержащий целые положительные 
// и целые отрицательные числа, в качестве результата возвращать сумму четных положительных элементов переданного массива.

// const newArray = [1, -2, 3, -6, 55, 44, -54];
// const sumPositiveNumbers = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] > 0 && newArray[i] % 2 === 0) {
//       sum += newArray[i];
//     }
//   }
//   return sum;
// };
// console.log(sumPositiveNumbers(newArray));

// 13. Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся 
// значения из переданного массива, в качестве результата возвращать новый массив с уникальными значениями из исходного.
// let newArray = [1, 4, 5, 4, 4, 3, 8, 99, -2, 0, 1];
// const deleteSimilar = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         delete arr[j];
//       }
//     }
//   }
//   const outputArray = arr.filter((element) => element !== null);
//   return outputArray;
// };
// console.log(deleteSimilar(newArray));

// альтернативный метод
// let newArray = [1, 4, 5, 4, 4, 3, 8, 99, -2, 0, 1];
// let outputArray = Array.from(new Set(newArray));

// console.log(outputArray);

// еще метод через filter
// let newArray = [1, 4, 5, 4, 4, 3, 8, 99, -2, 0, 1];
// console.log(newArray.filter((item, index)=>newArray.indexOf(item)==index));

// 14. Написать функцию  которая будет принимать два массива, и будет сравнивать их, если 
// они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

// const firstArray = [1,2,3,4,5];
// const secondArray = [1,2,3,4,5];
// const arrayCompare = (arr1, arr2) => {
//   for (let i=0; i<arr1.length;i++) {
//   if ((arr1.length!==arr2.length)||(arr1[i]!==arr2[i])) return false;
// }
// return true;
// }
// console.log(arrayCompare(firstArray,secondArray));

// const firstArray = [1,2,3,4,5];
// console.log(firstArray.length);

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // укорачиваем до двух элементов
// alert( arr ); // [1, 2]

// arr.length = 5; // возвращаем length как было
// alert( arr[3] ); // undefined: значения не восстановились


// Пример написания callback
let function1 = () =>{
  console.log("I'm the function1 result");
}


let function2 = (callback) =>{
  console.log("I'm the function2 result");
  
  callback();
}


function2(function1);
// console.log(function1);

// Разбор темы с Callback
// const foo = function () {
//   return 'Hello, world!';
//  }
 
//  // Вызываем функцию и выводим результат в консоль
//  console.log(foo()); // Hello, world
 
//  // Выводим функцию в консоль без вызова
//  console.log(foo); // ƒ () { return 'Hello, world!'; }

//  const makePizza = function (title, cb) {
//   console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`); 
//   setTimeout(cb, 3000);
//  }
 
//  const readBook = function () {
//   console.log('Читаю книгу «Колдун и кристалл»…');
//  }
 
//  const eatPizza = function () {
//    console.log('Ура! Пицца готова, пора подкрепиться.');
//  }
 
//  makePizza('Пеперонни', eatPizza);
//  readBook();



