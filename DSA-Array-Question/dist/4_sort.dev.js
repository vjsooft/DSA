"use strict";

// Javascript program to sort an array in ascending order
var arr = [90, 58, 60, 55, 0, 350, 2, 1, 4, 3, 5]; // let arr = ['ram', 'shyam', 'Priya', 'Vivek', 'ajay']

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }

  console.log(arr[2]);
}