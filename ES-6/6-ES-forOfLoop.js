/*
The for...of loop in ES6 is a modern and convenient way to iterate over iterable objects, such 
as arrays, strings, maps, sets, and more. Here's a breakdown of why and where to use it:
*/

// let str = 'hello';
// for (const char of str) {
//     console.log(char);  // Outputs: h, e, l, l, o
// }

// let mySet = new Set([1, 2, 3]);
// for (let value of mySet) {
//     console.log(value * 2) ;
// }

// let myMap = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
// for (let [key, value] of myMap) {
//     console.log(`${key} = ${value}`);
// }

let person = {
  fname: "vikas",
  lname: "jain",
  social: {
    fbID: "vikas jain",
    linkID: "vikas jain new",
  },
};

const user = {
    name: 'John',
    address: {
        city: 'New York',
        zipcode: 10001,
        coordinates: {
            lat: 40.7128,
            long: -74.0060
        }
    },
    contact: {
        email: 'john@example.com',
        phone: '123-456-7890'
    }
};

// for (let key in person) {
//     console.log(person[key]) ;
// }

let personKey = Object.keys(person);
let personValues = Object.values(person);
let personObj = Object.entries(person);

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key} :- ${person[key]}`);
    }
}

// console.log('=====personKey=====>', personKey);
// console.log('=====personValues=====>', personValues);
// console.log('=====personObj=====>', personObj);
