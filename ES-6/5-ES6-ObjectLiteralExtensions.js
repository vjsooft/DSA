/*
Defination :- 
Object Literal Syntax Extensions is a JavaScript feature that allows you to create objects 
in a shorter and more readable way. This means you can use shortcuts to add variables and 
functions directly inside objects without extra code.
*/ 

let age = 25;
let name= 'Amit'
let person = {
    name,
    age,
    'greet tell'() {
        console.log('Hello!kjjjjjjjjjjjjjjjjjj');
    }
};
console.log(person);

console.log(person.name);

console.log(person.age);

console.log(person['greet tell']());
