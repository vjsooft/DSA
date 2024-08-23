/*
-----------------Arrow Function--------------


*/

// const user ={
//     fName : "vikas",
//     lName : "jain",
//     fullName :function(){
//         return `My name is ${this.fName} ${this.lName}`
//     }
// }
// user.fName = "Sam"
// console.log("arrow function", user.fullName());

/*
Differance B/w Normal and arrow function
01:- check argument
02:- create function by constracter
03:- do't owner this
04:- return required
*/

/*
Check argument
function normalFun(a,b){
    console.log("Normal ", arguments);
    // console.log(this);
}
normalFun(1,5)
const arrowFun =(x,y)=>{
    console.log("arrow function", arguments);
    // console.log(this);
}
arrowFun(8,9)

*/

/*
do't owner this
const user = {
    fName: "vikas",
    lName : "jain",
    fullName : function(){
        return `${this.fName} ${this.lName}`
    }
}
const user = {
    fName: "vikas",
    lName : "jain",
    fullName : ()=>{
        return `${this.fName} ${this.lName}`
    }
}
console.log("normal function====>", user.fullName());
*/

/*
create normal function by constructor or arrow function
function model(name){
    this.name = name
}
const model=(name)=>{
    this.name = name
}
const getData = new model('Hyundai');
console.log("======>", getData);
*/

/*
return required
const sum =(x,y)=>(2+3)
console.log("==>", sum());
*/