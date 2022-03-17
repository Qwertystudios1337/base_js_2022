// const myVar1 = 5;
// const myVar2 = 10;

// if (myVar1 > myVar2) {
//   console.log(`Верно! ${myVar1} больше ${myVar2}`);
// } else if (myVar1 < myVar2) {
//   console.log(`Верно! ${myVar1} меньше ${myVar2}`);
// } else {
//   console.log("end");
// }

// let result = myVar1 > myVar2 ? console.log (true) : console.log(false); //тернарный оператор

// Конструкция Switch

// const userRole = "123";

// switch (userRole) {
//   case "student":
//     console.log("Текущий пользователь - student");
//     break;
//   case "admin":
//     console.log("Текущий пользователь - admin");
//   case "normal_user":
//     console.log("Текущий пользователь - normal_user");
//     break;
//     default:
//         console.log('Нет такого типа пользователя');
//         break;
// }

// Логические операторы
// && - логическое И - возвращает первое значение False
// || - логическое ИЛИ - возвращает первое значение True
// ! - логическое НЕ

// console.log(1||0||4);
// console.log(1&&0);

// console.log((1 && 2) || (4 && 0));

// Что делает JS пошагово:
// if (1&&0) {
//     console.log(result);
// }
// 1. Находит ключевое слово if, понимает, что дальше - условие.
// 2. Внутри условия находит логическое И-&&.
// 3. Опертор приводит значение к булеву типу - true/false (ВАЖНО: делает это "под капотом")
// 4. 1-> true, 0->false. && возвращают ЗНАЧЕНИЕ, которое является false при приведении в булев тип
// 5. В данном случае мы получаем 0, который приводится в булев тип блоком if.


// Логическое НЕ
// 1. JS приводит значение после ! к булеву типу
// 2. ! меняет полученный тип на противоположный

// const myVar =!5;
// if (!myVar) {
//     console.log("TRUE");
// }
// console.log(myVar);

// 1.

// const intervalOne = 10;
// const intervalTwo = 9;
// const intervalThree = 15;


// if ((intervalOne > intervalTwo) && (intervalOne > intervalThree)) {
//   console.log(`${intervalOne}-самый большой отрезок`);
// } else if ((intervalTwo > intervalOne) && (intervalTwo > intervalThree)) {
//     console.log(`${intervalTwo}-самый большой отрезок`);
// } else if ((intervalThree > intervalOne) && (intervalThree > intervalTwo)) {
//     console.log(`${intervalThree}-самый большой отрезок`);
// }

// 2.
// const currentTmp = -200;
// if (currentTmp<=-30) {
//     console.log("Оставайтесь дома!");
// }else if (currentTmp>=-30&&currentTmp<=-10){
//     console.log("Сегодня холодно");
// }else if (currentTmp>-10&&currentTmp<=5){
//     console.log("Не холодно");
// }else if (currentTmp>5&&currentTmp<=15){
//     console.log("Тепло");
// }else if (currentTmp>15&&currentTmp<=25){
//     console.log("Очень тепло");
// }else if (currentTmp>25&&currentTmp<35){
//     console.log("Жарко");
// }else {
//     console.log("Пекло!");
// }

// Циклы

// While/ Do While

// let myVar = 0;

// while (myVar>=0 && myVar<=10) {
//     console.log((myVar +=1)); //myVar=myVar+1
// }

// do {
//     console.log((myVar +=1));
// }while (false);

// FOR

// const endOfLoop = 10;

// for (let counter = 0; counter <= endOfLoop; counter++) {
//   console.log(counter);
//   if (counter === 5) break;
// }

// Задача 1
// const endOfLoop = 10;
// for (let i=0; i<=endOfLoop; i++){
//     console.log('Дороу');
// }

// let endOfWhile=0;
// while (endOfWhile<10) {
//     console.log("Дороу");
//     endOfWhile++; 
// }

// let endOfDo = 0;
// do {
//     console.log("Дороу");
//     endOfDo++;
// }while (endOfDo<10);

// Задача 2
// let carsAmount = 60;
// const mincarsAmount = 10;
// for (let day = 1; carsAmount > mincarsAmount; day++) {
//   carsAmount /= 2;

//   if (carsAmount < mincarsAmount) {
//     console.log(day);
//     break;
//   }
// }

// Задача 3

const startYear =1800;
const endYear = 2020;
let leapYearsAmount = 0;
// const firstSpaceTripYear = 1961;
// for (let i = startYear;i<=endYear; i++){
// if (i===firstSpaceTripYear) {     
// console.log(`${"Год первого полета в космос"} - ${firstSpaceTripYear}`);
//     console.log(`${"Количество итераций"} - ${i-startYear}`);
//     break; 
// }
// }

// год, номер которого кратен 400 - високосный
// остальные года, номер которых кратен 100 - НЕ високосные
// остальные года, номер которых кратен 4 - високосные


for (let year =startYear; year <= endYear; year++) {
if (year % 400 ===0 || (year % 4 === 0 && year % 100 !==0)) {
console.log (year);
leapYearsAmount +=1;
}
}
console.log (`Количество високосных лет - ${leapYearsAmount}`);
console.log (`Количество итераций - ${endYear - startYear}`);


