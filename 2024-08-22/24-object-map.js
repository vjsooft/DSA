/*
-----------------Map--------------
map is similar to object but littel bit advance for object
map key can be any data type like(number, string, bolune)
map has better performance then object

*/
const wrongMap = new Map();
wrongMap.set('fName', 'vikas');
wrongMap.set('lName', 'jain');
wrongMap.set('age', 25);
wrongMap.set('loginId',  true);




// for (let [key, value] of wrongMap) {
//    console.log(key, value);
// }

/*
//for of
const property = [5,9,8,6,5,7,9,4,2,3,5] 
for (const key of property) {
console.log(key);
}
*/

/*
//for in
let userDtl = {
    fName : "vikas",
    lName : "jain",
    age : 25
}

for(const data in userDtl){
    console.log(userDtl[data]);
}
*/

const skills = ['REACTJS', 'NEXTJS', 'HTML', 'JAVASCRIPT', 'CSS']

skills.forEach((ele)=>{
console.log(ele);
})