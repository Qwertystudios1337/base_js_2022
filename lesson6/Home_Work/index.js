// 1
// const arrayFromString = (newString) =>{
//     return newString.split(" ");
// }
// const myString = "Как дела, как дела, это новый кадиллак"
// console.log(arrayFromString(myString));

// 2
// const newString = "Ты кто такое, давай досвидания"
// const deleteCharacters = (str, length) => {
// return newString.indexOf(str, length);
// }
// const substring = "давай";
// const subStringLength = 13;
// console.log(deleteCharacters(substring,subStringLength));

// 3
// const insertDash = (str) => {
// const replaceString = str.replaceAll(" ", "-");
// const toUpperFromReplace = replaceString. toUpperCase();
//   return (toUpperFromReplace);
// };
// const myString = "привет как дела кдлоафы";
// console.log(insertDash(myString));

// 4
// const bigFirstLetter = (newString) => {
//   if(newString[0] !== newString[0].toUpperCase()){
//    return newString[0].toUpperCase()+newString.slice(1)
//   }
//   return newString
// };
// const myString = 'дася';
// console.log(bigFirstLetter(myString));

// 5
// const capitalize = (str) => {
//   return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()}) //Взять все символы без пробелов (\ S), стоящие в начале строки (^) 
//   // или после любого символа пробела (\ s) и преобразовать их в верхний регистр (toUpperCase)
// };
// const newString = "как дела как дела это новый кадиллак";
// console.log(capitalize(newString));

// 6
// const changeRegister = (myString) => {
//   let outputString = "";
//   for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === myString[i].toUpperCase()) {
//       outputString = outputString + myString[i].toLowerCase();
//     } else {
//       outputString = outputString + myString[i].toUpperCase();
//     }
//   }
//   return outputString;
// };
// const newString = "КаЖдЫй ОхОтНиК";
// console.log(changeRegister(newString));

// 7
function removeChar(str) {
  let outputString = "";
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) && str[i].toUpperCase() !== str[i].toLowerCase()) {
      outputString += str[i];
    }
  }
  return outputString;
}
const newString = "bfм&1f%а^цл*3(";
console.log(removeChar(newString));

