"use strict";

var sum = function sum(a) {
  console.log(a);
  return function (b) {
    return a + b + c;
  };
};

var getData = sum(4);
console.log(getData(3));