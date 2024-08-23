// Q1:- write 1 to 10 table and find even and odd number?
// Ans:-

/*
for(let i=1; i<=50; i++){
    // if(i % 2)
    if(i % 2 == 0){
        console.log('this is a even number=====>', i)
    }else{
        console.log('this is a odd number', i)
    }
}
*/
// Q2:- write function 10 to 1 table and find even and odd number?
// Ans:-

/*
for(let i = 100; i > 0; i--){
    if(i % 2 == 0){
        console.log('even num ---', i);
    }else{
        console.log('odd num--', i);
    }
}
*/
// Q3:- write function 10 to 1 table and find even and odd number?
// Ans:-

/*
function numberTable(count){
    let myNum = '';
    for(let i = 1; i<=count; i++){
        myNum += i + ',';
        console.log();
        if(i % 10 === 0){
            myNum += '</br>'
        }
    }
    return myNum
}
*/
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
// Q6: Write a JavaScript function to check whether a string is blank or not.

/*
function checkBlankStr(arg){
if(typeof arg === 'string'){
  if(arg === ''){  
            console.log('String is blank')
        }else{
            console.log('String is not blank')
        }
    }
}
checkBlankStr('')
*/
//Q7: Write a JavaScript function to split a string and convert it into an array of words.

/*
let str ="Robin Singh";
function convertStrArr(arg){
    // return arg.trim()
    // console.log(arg.trim());
    return arg.split(' ');
}
const result = convertStrArr(str);
console.log(typeof result);
*/
// Q8 : Write a JavaScript function to extract a specified number of characters from a string.
// Ans:-

/*
let str = "Robin Singh";
function extractCharacters(arg){
    return arg.slice(0, 4)
}
const result = extractCharacters(str);
console.log(result);
*/
// Q9: Write a JavaScript function to convert a string into abbreviated form.
// And:-

/*
let str= "Robin Singh"
function abbreviatedConvert(str1){
    // let split_names = str1.trim().split(" ");
    console.log(split_names);
    if (split_names.length > 1) {
        console.log(split_names[1].charAt(0));
        return `${split_names[0]} ${split_names[1].charAt(0)} .`;
    }
    return split_names;
}
const result = abbreviatedConvert(str);
console.log(result);
*/
// Q10 :- Write a JavaScript function to parameterize a string.
// Ans:- Output "robin-singh-from-usa"
// let str = "Robin Singh from USA";
// function parameterize(arg){
//     let outputStr = arg.toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
//     // let returnStr = [];
// console.log('----->', outputStr);
// if(outputStr.length > 1 ){
//     for(let i = outputStr.length -1; i < outputStr.length; i++){
//         returnStr+= outputStr[i] +  "-" 
//     }
//     console.log("long length");
// }else{
//     console.log("low length");
// }
// console.log('----->', returnStr);
// }
// parameterize(str);
// Q10 :- Write a JavaScript function to capitalize the first letter of a string.
// Ans:- Output "Js string exercises"

/*
let str = 'js string exercises';
function capitalizeFirstLetter(arg){
    return arg.charAt(0).toUpperCase() + arg.slice(1);
}
const result = capitalizeFirstLetter(str);
console.log(result);
*/
// Q11 :- Write a JavaScript function to capitalize the first letter of each word in a string.
// Ans:- Output "Js String Exercises"

/* 
let str = 'js string exercises';
function capitalizeFirstLetterEachWord(arg){
    let strStore = arg.split(' ');
    let resultData = '';
    for(let i = 0; i < strStore.length; i++ ){
        resultData+= strStore[i].charAt(0).toUpperCase() + strStore[i].slice(1) + ' ';
    }
    return resultData
}
const result = capitalizeFirstLetterEachWord(str);
console.log(typeof result);
console.log(result);
*/
// Q12 :- Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. 
//        It converts upper case letters to lower case, and lower case letters to upper case.
// Ans:- Output "aAbBC"

/*
let str = "AaBbc";
function swapcase(arg){
    return arg.split('').map((char)=>{
        if(char >= 'A' && char <= 'Z'){
            return char.toLowerCase();
        }else if(char >= 'a' && char <= 'z'){
            return char.toUpperCase();
        }else{
            return char
        }
    }).join('');
    
}
const result = swapcase(str)
console.log('======result======>', result);
*/
// Q12 :-  Write a JavaScript function to convert a string into camel case.
// Ans:- Output "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

/*
let str1 = "JavaScript Exercises"
let str2 = "JavaScript exercises"
let str3 = "JavaScriptExercises"
function camelize(arg){
    return arg.split(' ').map((char)=>{
        if(char >= 'a' && char <= 'z'){
            return char.charAt(0).toUpperCase() + char.slice(1);
        }else{
            return char
        }
    }).join('');
}
const result = camelize(str3)
console.log('======result======>', result);
*/
// Q13 :-  Write a JavaScript function to uncommelize a string.
// Ans:- Output "hello world"
// "hello-world"
// "hello_world"
// let str1 = 'helloWorld';
// let str2 = 'helloWorld','-';
// let str3 = 'helloWorld','_';

/*
function uncommelize(...argu){
    if(argu.length > 1){
        let modifyStr = argu[argu.length - 1]
             argu.map((item)=>{
                for(let i=0; i < item.length; i++){
                    if(item[i] >= "A" && item[i] <= "Z"){
                            console.log('--------item-------', item[i].charAt(0));
                        // console.log("========item.charAt(0)=======", item + ' '+ modifyStr  + item[i].charAt(0) + + item[i].charAt(0));
                        // return modifyStr + item.charAt(0);
                    }else{
                        return item
                    }
                }
            }).join('');
    }else{
        let getStr = argu.toString()
        return getStr.split('').map((char)=>{
            if(char >= "A" && char <= "Z"){
                return ' ' + char.charAt(0)
            }else{
                return char
            }
        }).join('')
    }
}
const result = uncommelize('helloWorld','-')
console.log('======result======>', result);


function string_parameterize(str, char=" ") {
    const isCharUpperCase = (char) => char === char.toUpperCase();
    let stringArray = str.split('');
    let updatedArray = []
    stringArray.map( (item, index) => {
      if(isCharUpperCase(item)) {
        if(index != 0){
          updatedArray.push(char + item.toLowerCase())
        }
        else {
          updatedArray.push(item.toLowerCase());
        }
      }
      else {
        updatedArray.push(item);
      }
      
    })
  
    console.log(updatedArray.join(''))
  }
  
//   string_parameterize("RobinSinghFromUsa")
/*
  string_parameterize("RobinSinghFromUsa", 'vikasJain', "-")
//   string_parameterize("RobinSinghFromUsa", "_")

// Q14 :-  Write a JavaScript function to concatenate a given string n times (default is 1).
// Ans:- Output "Ha!"
             // "Ha!Ha!"
             // "Ha!Ha!Ha!"

             const result =  string_parameterize("RobinSinghFromUsa", 'vikasJain', "-")
console.log('======result======>', result);
*/

/*
let str1 = 'Ha!'
function repeatStr(arg){
console.log(arg.repeat(3));
}
repeatStr(str1)
*/
// Q15 :- Write a JavaScript function to chop a string into chunks of a given length.
// Ans:- Output ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

/*
let str ='w3resource'
function string_chop(str, size){
    let result = []
    for(let i=0; i< str.length; i+= size){
        result.push(str.slice(i, i+ size))
    }
    return result
}
const result = string_chop(str, 3)
console.log('======result======>', result);
*/
// Q16:- Write a JavaScript function to repeat a string for a specified time.
// Ans:- Output repeat_string('a', 4)
// let str = 'output'
// function repeat_string(arg){
//     let remove
//     let count = 0;
//     for(let i=0; i < arg.length; i++){
//         console.log(arg[i]);
//         // if(arg[i])
//     }
// }
// repeat_string(str);
// Q17:- Write a JavaScript function to strip leading and trailing spaces from a string.
// Ans:- Output w3resource

/*
let str1 = 'w3resource  ';
let str2 = ' w3resource';
let str3 = ' w3resource ';

function strip(arg){
    console.log(arg.trim());
    console.log(arg.trim().length);
    console.log(arg.length);
}
strip(str3)
*/
// Q18:- Write a JavaScript function to convert a string to title case.
// Ans:- Output Php Exercises. Python Exercises

/*
let str1 = 'PHP exercises. python exercises.';
function sentenceCase(arg){
    console.log(arg.toString());
}
sentenceCase(str1)
*/
// Q18:- Reverse words in a given string
// Ans:- Output code practice quiz geeks

/*
let str = 'geeks quiz practice code';
function reverseWords(arg){
    return  arg.split('').reverse().join('').toString()
} 
const result = reverseWords(str)
console.log('======result======>', result);
*/

/*
let str = 'geeks quiz practice code';
function reverseWords(arg){
    let getResult = '';
    for(let i= arg.length -1; i >= 0; i--){
        getResult += arg[i]
    }
    return getResult
} 
const result = reverseWords(str)
console.log('======result======>', result);
*/
// Q18:- Longest Common Prefix using Sorting ---------------------PENDING---------------
// Ans:- Output “gee”
// let str = ['geeksforgeeks', 'geeks', 'geek', 'geezer'];
// function longestCommonPrefix(arg){
//     console.log(arg.sort());
// } 
// longestCommonPrefix(str)
// const result = 
// console.log('======result======>', result);
"use strict";