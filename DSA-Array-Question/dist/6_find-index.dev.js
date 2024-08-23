"use strict";

var arr = [5, 6, 9, 4];
var i = 0; // Output Res = 10

function findIndex(arg, num) {
  var countVal = arg[i];
  var remaningVal = num - countVal;

  if (arg.indexOf(remaningVal)) {
    console.log('==>', i, arg.indexOf(remaningVal));
    return false;
  } else {
    i++;
    findIndex(arg, num);
  }
}

findIndex(arr, 10);