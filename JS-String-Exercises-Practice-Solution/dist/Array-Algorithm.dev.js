"use strict";

// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Ans

/*
let arr1= 'w3resource'
let arr2= [1, 2, 4, 0]
function checkArray(arg){
console.log(Array.isArray(arg));
}
checkArray(arr1)
*/
// 2. Write a JavaScript function to clone an array.
// Ans
var arrClone1 = [1, 2, 4, 0];
var arrClone2 = [1, 2, [4, 0]];
/*
// --------First Approch-------------
function array_Clone(arg){
let newarr = arg
return newarr
}
console.log('result=========>', array_Clone(arrClone2));
*/

/*
// --------Second Approch-------------
function array_Clone(arg){
console.log();
    return arg.slice(0)
}
console.log('result=========>', array_Clone(arrClone1));
*/

/*
// --------Third Approch-------------
function array_Clone(arg){
    let y = Array.from(arg);
    return y
}
console.log('result=========>', array_Clone(arrClone1));
*/
// 3. Write a simple JavaScript program to join all elements of the following array into a string.
// Ans

/*
let myColor = ["Red", "Green", "White", "Black"];
function joinArray(getArr){
return getArr.toString()
}
console.log(joinArray(myColor.join('+')));
*/
// 4. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. 
//    For example if you accept 025468 the output should be 0-254-6-8.
// Ans

/*
const insertNum = window.prompt('enter a valid nuber')
let convertStr = insertNum.toString();
let getRus = [convertStr[0]]
for(let i=1; i<convertStr.length; i++){
    if((convertStr[i -1] % 2 === 0) || (convertStr[i] % 2=== 0)){
        getRus.push('-', convertStr[i])
        console.log('check even number', '-', convertStr[i]);
    }else{
        getRus.push(convertStr[i])
    }
}
console.log('=====typeOf====>', convertStr);
console.log('=========>', getRus.join(''));
*/
// 4. Write a JavaScript program to sort the items of an array.
// Ans Output : -4,-3,1,2,3,5,6,7,8

var data = [-3, 96, 8, 7, -5, 6, 5, 3, 2, 1];
/*
-------------------First Approch-------------------
// console.log(arr1.sort((a,b)=> a-b));
*/
// -------------------2nd Approch-------------------

/*
for(let i= 0;i<data.length;i++){
    for(let j=0;j<data.length; j++){
       if(data[j]>data[j+1]){
        let temp = data[j];
        data[j]= data[j+1];
        data[j+1]= temp;
       }
    }
}
console.log('------>', data);
*/
// 5.  Write a JavaScript program to find the most frequent item in an array.
// Ans Output : a ( 5 times )

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = 0;

for (var i = 0; i < arr1.length; i++) {}

console.log(arr1.filter(function (item) {
  return item === 'a';
}));