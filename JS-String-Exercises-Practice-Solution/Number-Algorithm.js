
// Q1:- Verify a prime number?
// Ans:-
/*
function primeNumber(arg){
    if(arg % 2 == 0){
     console.log('this is prim number');   
    }else{
     console.log('this is not prim number');   
    }
}
primeNumber(50)
*/

// Q2:- Find all prime factors of a number?
// Ans:-
/*
    let number = prompt('pleause enter number');
    for(let i=1; i<= number; i++){
        if(number % i == 0){
            console.log(i);
        }
    }
*/

// Q3:- Get nth Fibonacci number?
// Ans:-
/*
function fibonacciNumber(){
    let fibonaA = 0
    let fibonaB = 1
    for(let i=0; i<10; i++){
        let temp = fibonaA+fibonaB;
        fibonaA=fibonaB;
        fibonaB= temp;
    }
}
fibonacciNumber()
*/
// Q4:- Find the greatest common divisor of two numbers?
// Ans:-

// Q5:- Remove duplicate members from an array?
// Ans:-
// let removeDuplicate= [1,3,3,3,1,5,6,5,7,6,7,8,1]

// let removeDup = [...new Set(removeDuplicate)]
/*
function removeDuplicateItem(arr){
    const result = arr.filter((val, index, self)=>{
        return self.indexOf(val) !== index
    })
    return result
}
let result = removeDuplicateItem(removeDuplicate)
console.log(result);
*/
/*
function removeDuplicateArr(arr){
    let exists ={};
    let outArr = [];
    let elm;
  
    for(var i =0; i<arr.length; i++){
      elm = arr[i];
      if(!exists[elm]){
        outArr.push(elm);
        exists[elm] = true
     }
    }
    return outArr;
  }
  
  let result =  removeDuplicateArr(removeDuplicate)
console.log(result);
*/

// Q6:- Merge two sorted array?
// Ans:-

// let arrOne = [2,5,6,9,86,97,45,11,65]
// let arrTwo = [1,2,3,29,5,77]
// let newArray = []
/*
let finalArr = [...arrOne, ...arrTwo]
const getResult = finalArr.sort((a,b)=> a-b)
console.log(getResult);
*/

/*
for (let i = 0; i < arrOne.length; i++) {
    newArray[i] = arrOne[i];
}
for (let i = 0; i < arrTwo.length; i++) {
    newArray[arrOne.length+i] = arrTwo[i]
}
*/
// newArray.push(...arrOne)
// newArray.push(...arrTwo)


// console.log('========>', newArray);
// Q7:- swap number without temp
// Ans:-

/*
function swapNumb(a, b){
a= a+b; //a==> 5
b= a-b;  //a==> 2
a= a-b // a==>3
console.log(a, b);
}
  
swapNumb(2, 3);
*/

// Q8:- reverse words
// Ans:-
/*

function reverseWords(str){
    // return str.split(' ').reverse().join(' ')

    let getStr = str.split(' ')
    let rev = ''
    for(let i=getStr.length -1; i>=0; i--){
        rev+= getStr[i]
        console.log('i means ', getStr[i] !== 0);
        if ( getStr[i] !== 0) {
                rev += ' ';
            }
        }
}
const res= reverseWords('have a tailing white space')
console.log(res);
*/

// Q9:- reverse in place
// Ans:-

// function reverseWords(str){
//     return str.split(' ').reverse().join(' ').split('').reverse().join('');
// }
/*
function reverseWords(str){
    let getResult =str.split(' ');
    let finalResult = ''
    for(let i = 0; i<getResult.length; i++){
        finalResult+= getResult[i].split(' ').reverse().join(' ')
    }
    return finalResult.trim();
    console.log('result=====>', );
}
const res= reverseWords('have a tailing white space')
console.log(res);
*/

// Q10:- First non repeating char
// Ans:-
/*
--------------------FIRST APPROCH
// const firstNonRepeatChar ='the quick brown fox jumps then quickly blow air'
const charCount = {};
for( let str of firstNonRepeatChar){
    charCount[str] = (charCount[str] || 0) +1
}
const finalResult = Object.keys(charCount).filter((ch)=> charCount[ch] === 1)
console.log('====>charCount', finalResult[0]);
*/

/*
-------------------SECOND APPROCH
const charCount = [];
for(let i=0; i<firstNonRepeatChar.length; i++){
    if(firstNonRepeatChar.indexOf(firstNonRepeatChar[i]) === firstNonRepeatChar.lastIndexOf(firstNonRepeatChar[i])){
        charCount.push(firstNonRepeatChar[i])
    }
}
console.log(charCount[0]); 
*/

// Q11:- remove duplicate char
// Ans:-
let removeDuplicateChar ='Learn more javascript dude'
/*
----------------1St APPPROCH
console.log(removeDuplicateChar.length);
let result = [...new Set(removeDuplicateChar)]
console.log(result.length);
console.log(result.toString());

----------------2Nd APPPROCH
let removeDupStr = '';
for(let i=0; i<removeDuplicateChar.length;i++){
    if(removeDupStr.includes(removeDuplicateChar[i]) == false){
        removeDupStr += removeDuplicateChar[i]
    }
}
console.log('====removeDupStr===>', removeDupStr);
*/
// Q11:- check palindrome
// Ans:-
/*
----------------First APPPROCH
let str = 'hello'
function checkPalindrome(arg){
    for (let i = 0; i < arg.length/2; i++) {
        if(arg[i] != arg[arg.length -1 -i]){
            return false
        }else{
            return true
        }
    }
}
console.log(checkPalindrome(str));
*/
/*
// ----------------Second APPPROCH
let str = 'mom'
function checkPalindrome(arg){
    let newStr = arg.split('').reverse().join('')
    if(arg === newStr){
        return true
    }else{
        return false
    }
}
console.log(checkPalindrome(str));
*/

// Q12:- random between 5 to 7
// Ans:-



