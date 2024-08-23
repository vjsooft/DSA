"use strict";

// Program to find the minimum (or maximum) element of an array
var arr = [1, 423, 6, 46, 34, -2, 13, 53, 4]; // Approch 1

/*
let result =arr.sort((a, b)=> a-b)
console.log(result);
*/
// Approch 2

/*
function findMax(arg){
  let max = arg[0];
    for(let i=0; i<arg.length; i++){
       if(arg[i] >  max ){
        max = arg[i];
       }
    }
    return max
}
console.log(findMax(arr));
*/

/*
function findMin(arg){
    let min = arg[0];
      for(let i=0; i<arg.length; i++){
         if(arg[i] <  min ){
            min = arg[i];
         }
      }
      return min
  }
  console.log(findMin(arr));
*/