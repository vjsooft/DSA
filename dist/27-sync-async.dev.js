"use strict";

var a = 10;
console.log('==A===>', a);

function sum() {
  var b = 2;
  setTimeout(function () {
    console.log('==B===>', b);
  }, 0);
}

sum();
var c = 5;
console.log('==C====>', c);