

const userDtl ={
    fName: "Vikas",
    lName:"jain",
}
function fullName (...userInfo){
    return `${this.fName} ${this.lName} ${userInfo}`
}
const getData = fullName.call(userDtl);
console.log(getData);
// console.log(fullName.call(userDtl, 'Delhi', 'india'));
// console.log(fullName.apply(userDtl, ['Delhi', 'india']));