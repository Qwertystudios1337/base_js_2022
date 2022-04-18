// const myArr = ['vasya', 19];
// const myArrToObject = myArr.reduce((accum, currentEl, i)=> {
// return accum [i] = currentEl;
// }, {});
// console.log(myArrToObject)


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

// другой способ решения
// const newArray = [1, -2, 3, -6, 55, 44, -54];
// const calcPositiveElements = (arr) => {
//   const result = arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((acc, current) => acc + current);

//   return result;
// };

// console.log(calcPositiveElements(newArray));

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

// решение от препода
// let newArray = [1, 4, 5, 4, 4, 3, 8, 99, -2, 0, 1];

// const getUniqueElements = (arr) => {
//     const result =[];

//     arr.forEach((item)=> {
//         if(!result.includes(item)){
//             result.push(item);
//         }
//     });
//     return result;
// }
// console.log(getUniqueElements(newArray));

// 14. Написать функцию  которая будет принимать два массива, и будет сравнивать их, если 
// они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.
// const firstArray = [1,2,3,4,5];
// const secondArray = [1,2,3,4,5];

// const isArrayEqual = (arr1, arr2) =>{
//     if (arr1.length !==arr2.length) {
//         return false;
//     }
// const res = arr1.every((el,i) => el===arr2[i]);

// return res;
// };

// console.log(isArrayEqual(firstArray,secondArray));

// let myVar = 1;
// let myVar2 = myVar;

// myVar2 = 5;

// console.log(myVar, myVar2);

// const myObject = {name: 'Vasya'};
// const myObject2=myObject;

// myObject2.name = "Petya";

// console.log(myObject, myObject2);

// const myObject = {name: 'Vasya'};
// // const myObject2=Object.assign({name:20}, myObject);
// const myObject2={...myObject};

// const{name} = myObject2;

// console.log(name);

// // myObject2.name = "Petya";

// console.log(myObject, myObject2);

// const myArray = [5,4,2,6];

// const myArray2 = [10,2,8];

// const newArray = [...myArray, ...myArray2];
// console.log(newArray);

// const myFunc = (arg1, arg2, ...args) => {
// console.log("ARG1",arg1);
// console.log("ARG2",arg2);
// console.log("ARGs",args);
// };

// myFunc(5,2,4,7,10,20);


// const myArray = [2,5,10];

// for(let element of myArray) {

//     console.log(element);
// }

// const myObject = {name:"Vasya", age:20, gender:"male"};

// const newArr=[];

// for (let key in myObject) {
//    newArr.push(myObject[key]);
// }

// console.log(newArr);

// const countArgsSum = (...args) =>{
//     let result = 0;

//     for (let arg of args) {
//         if(arg%2===0) {
//             result+=arg;
//         }
//     }
//     return result;
// };

// console.log(countArgsSum(1,2,3,4));


// const myArr1 = [1,4,5,10,22,6,4];
// const myArr2 = [1,6,8,3,4,4];

// const getCommonElements = (arr1,arr2) => {
//     const newArr=[];

//     arr2.forEach((elem)=>arr1.includes(elem)&&!newArr.includes(elem)&&newArr.push(elem));

//     return newArr
// };
// console.log(getCommonElements(myArr1, myArr2));

// console.log(this);

// const myObject = {
//     name: "Vasya",
//     context: this,
// callName: function () {
//     console.log(this);
//     console.log(this.name);
// },
// };

// console.log(myObject.context);


// const newObject = {
//     name: 'Petya',
//     obj: myObject,
// };

// newObject.obj.callName();

// const city = {
//     name: "Kiev",
//     population: 2000000,
//     showName: function () {
//         console.log(this.name);
//     },
//     showPopulation: function () {
//         console.log(this.population);
//     },

// changeKeyValue: function (key, newValue) {
//     switch(key) {
//         case 'name':
//             this.name = newValue;
//             return;
//             case 'population':
//                 this.population = newValue;
//                 return;
//             default:
//                 console.log("Ключ не найден");
//                 return;
//     }
// },
// };

// city.changeKeyValue('population', 2222);

// console.log(city);

// const myObject = {
//     name: "Vasya",
// callName: function () {
//     console.log(this.name);
// },
// };

// const newObject = {
//     name:'Petya',
// };

// myObject.callName.call(newObject);


// const say = function (phrase) {
//     console.log(`${this.name}:${phrase}`);
// };
// const myObject = {
//     name: "Vasya",
// };

// const newObject = {
//     name: "Petya",
// };

// say.call(myObject, "Привет");
// say.call(newObject, "И тебе привет!");

// newObject.obj.callName();

// const city = {
//     name: "Kiev",
//     population: 2000000,
//     showName: function () {
//         console.log(this.name);
//     },
//     showPopulation: function () {
//         console.log(this.population);
//     },

// changeKeyValue: function (key, newValue) {
//     switch(key) {
//         case 'name':
//             this.name = newValue;
//             return;
//             case 'population':
//                 this.population = newValue;
//                 return;
//             default:
//                 console.log("Ключ не найден");
//                 return;
//     }
// },
// };

// const newCity = {
//     name: "NN",
//     population: 1500000,
//   };
  
//   city.showName.call(newCity);
//   city.showPopulation.call(newCity);
//   city.changeKeyValue.call(newCity, "name", "NY");
//   city.changeKeyValue.apply(newCity, ["population", 5000]);
  
//   const boundFunc = city.changeKeyValue.bind(newCity, "name", "LA");
//   boundFunc();
  
//   console.log(newCity);


//   Замыкание

// const myFunc =() => {
//     const myVar=5;

//     return (param) => {
//         console.log(myVar+param);
//     };
// };

// myFunc()(10);

// Каррирование 
// const myFunc = (a) => {
//     return (b) => {
//         return (c) => {
//             return a+b+c;
//         };
//     };
// };
// console.log(myFunc(2)(3)(10));

// Практика 1
// const ppVolume =() => {
//     const h=10;

//     return (a,b) => {
//         console.log(h*a*b);
//     };
// };
// ppVolume()(2,3);

// Практика 2
const ppVolume = (h) => {
    return (a,b) => {
            return a*b*h;
        };
    };
console.log(ppVolume(2)(3,10));