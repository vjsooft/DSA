// . find() returns the first matching element, while . filter() returns an array of all matching elements. 
 
let studentList = [
    {name:"ram", age:22},
    {name:"shyam", age:28},
    {name:"kisan", age:44},
    {name:"yogesh", age:66},
    {name:"ramkamal", age:33},
    {name:"ram", age:25},
    {name:"vikas", age:18},
    {name:"priya", age:15},
];
// const findMethod = studentList.filter((item)=>{
//     return (item.age >= 25)
// })
const findMethod = studentList.find((item)=>{
    return (item.age >= 25)
})
console.log('======>', findMethod)