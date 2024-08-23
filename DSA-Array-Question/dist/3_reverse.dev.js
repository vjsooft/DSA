"use strict";

var arr = [1, 423, 6, 46, 34, -2, 13, 53, 4]; // console.log(arr.reverse());

/*

*/

function reverseArr(arg) {
  for (var i = arg.length - 1; i < 0; i--) {
    console.log(arg[i]);
  }
}

console.log(arr.reverse(arr));