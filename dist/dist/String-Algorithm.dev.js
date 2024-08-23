// Q1:- write 1 to 10 table and find even and odd number?
// Ans:-
// for(let i=1; i<=50; i++){
//     // if(i % 2)
//     if(i % 2 == 0){
//         console.log('this is a even number=====>', i)
//     }else{
//         console.log('this is a odd number', i)
//     }
// }
// Q2:- write function 10 to 1 table and find even and odd number?
// Ans:-
// for(let i = 100; i > 0; i--){
//     if(i % 2 == 0){
//         console.log('even num ---', i);
//     }else{
//         console.log('odd num--', i);
//     }
// }
// Q3:- write function 10 to 1 table and find even and odd number?
// Ans:-
// function numberTable(count){
//     let myNum = '';
//     for(let i = 1; i<=count; i++){
//         myNum += i + ',';
//         console.log();
//         if(i % 10 === 0){
//             myNum += '</br>'
//         }
//     }
//     return myNum
// }
// const result = numberTable(100);
// const finalRes = document.getElementById('numberTable').innerHTML = result
// Q4:- write function 1 to 100 table opposite direction?
// Ans:-
// function OppositeTable(count){
//     let tableData = '';
//     for(let i=count; i >= 1 ; i--){
//         tableData += i + ','
//         if((i % 10) -1 == 0){
//             tableData += '</br>'
//         }
//     }
//     return tableData
// }
// const getResult = OppositeTable(100)
// document.getElementById('oppositeTable').innerHTML = getResult;
// Q5:- Write a JavaScript function to check whether an 'input' is a string or not.
// Ans:-

/*

function checkStr(getStr){
    if(typeof getStr === 'string'){
        if(getStr === ''){
            return false
        }
        return true
    }else{
        return false
   }
}
const getRes = checkStr('gre');
console.log(getRes);
*/
// Q5:- Write a JavaScript function to check whether an `input` is an array or not.

/*
function checkArray(getArg) {
    if (Array.isArray(getArg)) {
        return true
    } else {
        return false
    }
}
const getRes = checkArray(['dsad']);
console.log(getRes);
*/
// Q6: Write a JavaScript function to clone an array.
// Ans:-
// Opt 1:-
// let arr = [1, 2, 4, 0];
// let cloneArr = arr
// let insideArr = arr.splice(2, 3);
// arr.push(insideArr)
// console.log('====>', insideArr)
// cloneArr[1] = 3;
// console.log('====>', arr)
// console.log('====>', cloneArr)
// Q6: Write a JavaScript function to clone an array.
"use strict";