"use strict";

/*
---------------Callback----------------------------
function msg() {
    console.log('Calculation data');
}

function msgHi() {
    console.log('Hi');
}

function sum(a, b, msgCallback){
    console.log(a+b);
    msgCallback();
}
sum(5,6, msg)
sum(5,6, msgHi)
*/
// ---------------Callback Hell----------------------------

/*

function getData(userId, getData2){
    setTimeout(()=>{
        console.log(`"--- Get User Id--- ", ${userId}`);
        if(getData2){
            getData2()
        }
    }, 2000)
}
getData(123, ()=>{
    getData(33, ()=>{
        getData(55)
    });
});
*/
var apiPath = 'https://dummyjson.com/products';

function getData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Success');
      console.log("check data");
    }, 3000);
  });
}

console.log("=======>", getData());