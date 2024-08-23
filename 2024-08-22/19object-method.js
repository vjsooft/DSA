/*
-----------------Object Method--------------

Methods for Defining JavaScript Objects
Using an Object Literal -- Done
Using the new Keyword  -- Done
Using an Object Constructor  -- Done
Using Object.assign()  -- Done
Using Object.create()  -- Done
Using Object.fromEnties()
-----------------Array Itreation--------------

*/

// OPTION 1  Object Literal

/*
const userData ={
    fName:"vikas",
    lName:"jain",
    age:25
}
console.log("======>", userData.fName);
*/

//  OPTION 2  Create an Object
/*
const person = {};

person.fName = "vikas",
person.lName ="jain"
person.age = 35

console.log("=======>", person.age);
*/

// OPTION 3  Using the new Keyword 
/*
const newUser = new Object()
newUser.fName = "priyanks",
newUser.lName = "jain",
newUser.logIn = true,
newUser.class = 8
console.log("===newUser===>", newUser.class);
*/

// OPTON 4 Using an Object Constructor 
/*
when we are need create multipal object with same method then use constructor function
constructor basically blueprient of object
*/

/*
function userInfo(fName, lName, email, role, accesId) {
    this.fName = fName,
    this.lName = lName,
    this.email = email,
    this.role = role,
    this.accesId = accesId
}
const user = new userInfo("vikas", "jain", "vikas@gmail.com", "normalUser", 205);
const admin = new userInfo("admin", "admin", "admin@gmail.com", "admin", 100);
const hr = new userInfo("hr", "hr", "hr@gmail.com", "hr", 200);

console.log("===user==>", user);
console.log("===user==>", admin);
console.log("===hr==>", hr);
*/


// OPTON 5 Using Object.assign()
const user1 = { a: 1, b: 2 };
const user2 = { b: 4, c: 5 };

// const returnedTarget = Object.assign(user1, user2);
const returnedTarget = {...user1, ...user2}

returnedTarget.a = 5
// console.log("==Object.assign==>", user1);
// console.log("==Object.assign==>", returnedTarget);



// const obj1 = { a: 0, b: { c: 0 } };
// const obj2 = Object.assign({}, obj1);
// obj2.b.c = 2
// console.log(obj1);
// console.log(obj2); // { a: 0, b: { c: 0 } }

// Deep Clone
// The global structuredClone() method creates a deep clone of a given value using the

// let student2 = JSON.parse(JSON.stringify(student1))



const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
console.log("-opt1-", obj3);
console.log("-opt2-",obj4);
obj3.a = 4;
obj3.b.c = 4;
console.log("-opt3-", obj3);
console.log("-opt4-", obj4); // { a: 0, b: { c: 0 } }


