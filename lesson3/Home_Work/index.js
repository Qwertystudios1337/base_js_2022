// // let value = true;
// // console.log(typeof value);


// // console.log(typeof String(value));

// // let userName = "Shanya";
// // console.log(`Hello ${userName}`);

// // let car={
// // model:"Hyundai",
// // enginePower:150,
// // color:"white",
// // }
// // const carProperty=car.enginePower;
// // console.log(carProperty);

// // console.log(typeof("Ivan"/4));

// // const obj = {
// // 	foo: "bar",
// // };
// // console.log(typeof(obj));

// // const string = "123zxc";
// // const number = +(string);
// // console.log(typeof number);

// // console.log(false==NaN);

// //п1
// let word = "Hello world";
// console.log(word);

// //п2
// let isAdmin = true;
// let string = "Hello";
// const number = 1337;
// let big = 21205n;
// let und = undefined;
// let zero = null;
// let ad = Symbol;

// var human ={
// age: 28,
// height : 193,
// sex : "male",
// }

// // п3
// console.log(isAdmin);
// console.log(string);
// console.log(number);
// console.log(big);
// console.log(und);
// console.log(zero);
// console.log(ad);
// console.log(human.age);

// // п4
// console.log(typeof isAdmin);
// console.log(typeof string);
// console.log(typeof number);
// console.log(typeof big);
// console.log(typeof und);
// console.log(typeof zero);
// console.log(typeof ad);
// console.log(typeof human.age);

// // п5
// // number=10;

// // п6
// human.age=21;
// console.log(human.age);

// console.log(typeof undefined);
// console.log(NaN == undefined );

//  Number
console.log(1, typeof 1);
console.log(5 - "2", typeof (5 - "2"));
console.log(5 - "123abc", typeof (5 - "123abc"));

console.log("\n");

// BigInt
console.log(
  BigInt(0b11111111111111111111111111111111111111111111111111111),
  typeof BigInt(0b11111111111111111111111111111111111111111111111111111)
);

console.log("\n");

// String
console.log("Строка", typeof "Строка");
console.log("2" + 3, typeof ("2" + 3));

console.log("\n");

// Boolean
console.log(true, typeof true);
console.log(!0, typeof !0);
console.log(!!2, typeof !!2);
console.log(Boolean(""), typeof Boolean(""));

console.log("\n");

//Null, undefined
console.log(null, typeof null);
console.log(null + 0, typeof (null + 0));
console.log(null - "2", typeof (null - "2"));
console.log(null + "123", typeof (null + "123"));
console.log(null === undefined);
console.log(null == undefined);

console.log("\n");

//Symblol
console.log(Symbol("123"), typeof Symbol("123"));

console.log("\n");

//Object
const newUser = {
  name: "Vasya",
  age: 23,
  role: {
    id: 1,
    type: "admin",
  },
};

console.log(typeof newUser);
newUser.type = "normal_user";
console.log(newUser);