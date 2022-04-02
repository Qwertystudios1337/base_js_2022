// const goToThePlace = (place) => {
//     console.log(`Иду в ${place}! Хэхэй`);
// };

// const user = {
//     name: "Ivan",
//     age: 18,
//     goToUniversity: () => goToThePlace("универ"),
// };

// user.goToUniversity();


// const nameKey = "name123e";
// const user = {
//   [nameKey]: "Ivan",
//   age: 18,
// };

// console.log(user);

// const user = {
//   name: "Ivan",
//   age: 18,
// };

// user.name = 'Petya';

// delete user.age;
// console.log(user);


// const myFavoriteFilm = {
//     name: 'Titanic',
//     release: 1999,
//     filmDirector: 'James Cameron',
//     originCountry: "USA",
// };

// myFavoriteFilm.revenue = 200000000;

// myFavoriteFilm.showName = () => console.log(myFavoriteFilm);


// delete myFavoriteFilm.release;
// // myFavoriteFilm.showName();

// console.log(myFavoriteFilm);

// const myNumber = 10.21212;

// console.log(Object.getPrototypeOf(myNumber));

// // console.log(myNumber);

// console.log(myNumber.toFixed(2));

// const myNumber =23e4;

// console.log(myNumber);

// parseInt - для целых чисел
// parseFloat - для дробных

// console.log(parseInt('1a123'));
// console.log(parseFloat('.a.23'));

// const myNumber ="awe123";

// if(typeof myNumber === 'number') console.log('Число');
// if(isNaN(myNumber)) console.log('Не число');

// console.log(isFinite(10/0));

// const myNumber =123.3;
// console.log(Math.ceil(myNumber)); //округление в большую сторону
// console.log(Math.floor(myNumber));//округление в меньшую сторону


// console.log(Math.random());

// const myArray = [1,4,6,4,7,9];
// console.log(Math.max(...myArray));//...myArray - тоже самое что и 1,4,6,4,7,9

// const myString = "Батя сказал \"Батя в здании\""
// console.log(myString); 

// const myName = "  Vasya"

// console.log(myName.trim()); //убирает пробелы в конце и начале строки

// const myString = "with id";

// const idIndex = myString.indexOf('id');
// const newString = myString.slice(idIndex);

// console.log(newString);

// 1
// const min = 1;
// const max = 10;
// const getRandomNumber = (min, max) => {
//   const result = Math.random() * (max - min) + min;
//   return result.toFixed();
// };
// console.log(getRandomNumber(min,max));

// 2
// const isCapitalLetter = (string, find) => {
// if(!string[find]) {
//     return "Ошибка"; //Проверка, что не было введено число большее, чем длина строки
// }

//   if (string[find] === string[find].toUpperCase()) {
//     return 'Заглавная';
//   } else {
//     return 'Незаглавная';
//   }
// };
// const newString = "ПривЕт";
// const position = 10;
// console.log(isCapitalLetter(newString, position));

// 3
const stringChange = (str, findValue, replace) => {
  return str.replaceAll(findValue, replace);
};
const newString = "строка, моя строка";
const change = "строка";
const newValue = "машина";
console.log(stringChange(newString, change, newValue));


