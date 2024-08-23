let arr = [1,5,9,6,9,8,6,7,5,2,6,4,8]
// let removedupArr= new Set(arr)
// console.log("=======>", arr);
// console.log("=======>", removedupArr);
let removeArr = []
for(let i=0; i< arr.length; i++){
    if(removeArr.indexOf(arr[i]) == -1){
        removeArr.push(arr[i])
    }
}
console.log("=======>", removeArr);