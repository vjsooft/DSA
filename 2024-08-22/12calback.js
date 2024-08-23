let another = function () {
    console.log("Hi callback");
}
function sum(a, b, callback){
    console.log(a+b);
    callback();
}
console.log(sum(2,3, another));