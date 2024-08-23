// let arr = [1, 2, 3, 9, 8, 7, 5];
// Question 1: How do you create an empty array in JavaScript?
// Ans:-
// let createArr =[]
// let createArr2 = new Array();
// console.log(createArr);
// console.log(createArr2);

// Question 2: How do you access the first and last elements of an array?
// Ans:-
// console.log('first index', arr[0]);
// console.log('last index', arr[arr.length -1]);

// Question 3: How do you add an element to the end of an array?
// Ans:-
// arr.push(70)
// console.log(arr);

// Question 4: How do you remove the last element from an array?
// Ans:-
// arr.pop()
// console.log(arr);

// Question 5: How do you loop through an array in JavaScript?
// Ans:-
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach((ele)=>{
//     console.log(ele);
// })

// Question 6: How do you check if an element exists in an array?
// Ans:-
// if(arr.includes(746513)){
//     console.log('value is match')
// }else{
//     console.log('value is not match')
// }

// let arr2 = [1, 2, 3];
// console.log('=========>', arr.indexOf(3) !== -1);
// if (arr.indexOf(3) !== -1) {
// console.log('Element found');
// } else {
// console.log('Element not found');
// }

// Question 7: How do you remove an element from an array at a specific index?
// Ans:-
/*
kha se deleate krna hai
kitna deleate krna hai
deleate item ke jagah koi repelśace krna hai ya nahi

console.log(arr);
arr.splice(3, 2, 40)
console.log(arr);
*/

// Question 8: How do you concatenate two arrays in JavaScript?
// Ans:-
// let arr1 = [1, 2];
// let arr2 = [3, 4];
//  let concatenateArr = [...arr1, ...arr2]
// arr1.push(...arr2)
// arr1.concat(arr2)
// console.log(concatenateArr);
//  console.log(arr1);

// Question 9: Write a function to flatten a nested array in JavaScript.
// Ans:-
// const fltArr = [5,8,9,7,6,[6, 8, 9, 7, 4, 5, 3, [89, 7, 36, 52, 41, [5, 98, 7, 4, 56, 3, 2]]],5,9,8,7,];
// const fltArr = [2, 5, [5, 9, 8, 6, [5, [9, [9, 6, 3, [9,[9,8,5,7,3,2,6,5,4,88,9475,86,24,11,536,24789,8]]]]]]];
/*
Approch One
console.log(fltArr.flat(Infinity));
*/
/*
Approch Two
let newArr = [];
function flatten(data) {
    console.log(data);
  data.map((item) => {
    if (Array.isArray(item)){
        flatten(item)
    }else{
        newArr.push(item)
    }
  });
}
flatten(fltArr);
console.log("=====finalResult===>", newArr);
*/

// Question 10: Find a peak element which is not smaller than its neighbours

/*
// 1 Approch 
    function notSmallar(data){
        return data.sort((a,b)=> b-a)
    }
    const getFinalResult = notSmallar(arr)
    console.log(getFinalResult[0]);
*/

/*
// 2 Approch 
let getRes =[]
function notSmallar(data){
    console.log(data);
    for(let i=0; i<data.length; i++){
        
    }
}
notSmallar(arr)
console.log('===============>'. getRes);
*/

// Question 11: find value in inddex in array
// let arrayItem = [2,9,8,6,5,7,3,1,0,5,48,87,6]

// const getResult = prompt('enter val')
// let convertNum = Number(getResult)
// console.log(arrayItem.indexOf(convertNum));
// console.log(arrayItem[convertNum]);

/*
function findIndVal(){
    let ele = document.getElementById('inputVal').value
    if (ele === '' && typeof ele === undefined ){
        console.log('Enter Valid Value');        
    }else{
        if(ele < arrayItem.length){
            console.log('hi', arrayItem[ele]);
        }else{
            console.log('Enter Valid Value');
        }
    }
}
*/

// Question 12+: insert element in array
// Ans:-
// let arrItem = [2, 9, 8, 6, 5, 7, 3, 1, 0, 5, 48, 87, 6];
// 1 Approch
// arrayItem.splice(2, 0, 90)

/*
// 2 Approch
let newItem = 90
let arrPosation = 2
for(let i=arrayItem.length -1; i >= 0; i--){
    if(i >= arrPosation){
        arrayItem[i+1] = arrayItem[i]
        if(i=== arrPosation){
            arrayItem[i] = newItem
        }
    }
 }
 console.log(arrayItem)
*/
// let newItem = 90;
// let arrPosation = 2;

// for (let i = arrItem.length - 1; i >= 0; i--) {
//     if (i >= arrPosation) {
//         arrItem[i + 1] = arrItem[i];
//         if(i === arrPosation){
//             arrItem[i] = newItem
//         }
//     } else {
//     }
// }

// Question 13: Delete element in array JS
let dataIt = [2, 9, 8, 6, 5, 7, 3, 1, 0, 5, 48, 87, 6];
// Approch 1
// console.log(arrItem.splice(3, 1 ));

// Approch 2
/*
// let delePos = 3
for (let i = delePos; i < arrItem.length - 1; i++) {
    arrItem[i] = arrItem[i + 1]
}
arrItem.pop()
console.log('after delete arrItem', arrItem);
*/

// Approch 3
/*
function findIndVal(){
    let ele = document.getElementById('inputVal').value
    let coveNo = Number(ele)
    console.log(typeof ele);
    for (let i = coveNo; i < dataIt.length-1; i++) {
        dataIt[i] = dataIt[i+1]
    }
    dataIt.length -1
    console.log('==========>', dataIt);
}
console.log(dataIt);
*/

// Question 13: Search element in array JS 
/*

let searchIt = [2, 9, 8, 6, 5, 7, 3, 1, 0, 5, 48, 87, 6];

function searchItem(arg) {
    let findItem = '';
    for (let i = 0; i < searchIt.length; i++) {
        if(arg === searchIt[i]){
            findItem = searchIt[i]
            break
        }else{
            console.log('Item is not found', i);
        }
    }
    console.log('==================findItem======', findItem);
    return findItem
}
*/

// Question 13: Search element in array JS 

let arr1 = [2, 9, 8, 6,];
let arr2 = [1, 0, 5, 48, 87, 6];
let margArr = []
// Approch 1
/*
for (let i = 0; i < arr1.length; i++) {
    margArr[i] = arr1[i];
}
for (i = 0; i < arr2.length; i++) {
    margArr[arr1.length + i] = arr2[i]
}
*/
// Approch 2
// margArr = [...arr1, ...arr2]

// Approch 3
// margArr.push(...arr1)
// margArr.push(...arr2)
// console.log('======>', margArr);

// Question 14: Search element in array JS 


// Question 15: Find a peak element which is not smaller than its neighbours

let peakNumber = [7,6,9,6,4,9,9,4,0,7]
function findPeakNumber(arg){
    outArr = []

    if(arg[0] > arg[1]){
        outArr.push(arg[0]) 
    } 
    if(arg[arg.length-1] > arg[arg.length-2]){
        outArr.push(arg[arg.length-1])
    }
    for(let i=1; i<arg.length-1; i++){
        if(arg[i] > arg[i-1] && arg[i] > arg[i+1]){     
            outArr.push(arg[i]) 
        }   
    }
   return outArr
}
console.log(findPeakNumber(peakNumber))