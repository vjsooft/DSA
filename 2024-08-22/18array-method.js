/*
-----------------Array Method--------------
Array length --Done
Array toString() --Done
Array at()
Array join() --Done
Array pop() --Done
Array push() --Done
Array shift() --Done
Array unshift() --Done
Array delete()
Array concat() --Done
Array copyWithin()
Array flat()
Array slice() --Done
Array splice() --Done
Array toSpliced()


-----------------Array Itreation--------------

*/

const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
console.log('------->', cities.slice(-2));
console.log("===A==>", cities);

console.log('------->', cities.splice(3, 0, "Gwalior", "Datia" ));
console.log("===B==>", cities);

// const myArr = Array.from("ABCDEFG");
const myArr = Array.split("ABCDEFG");

console.log("=======>", myArr);