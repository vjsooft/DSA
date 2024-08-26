// Q :- How To find duplicate elements in array in javascript|Javascript Coding Interview Question #1

/* 
Solution One
function duplicateElements(arr){
    return Result = arr.filter((ele, index, arr)=>arr.indexOf(ele)!== index)
}
console.log(duplicateElements([9,8,6,7,1,3,2,4,5,6,8,7,4,5,6]));
*/

/*
Solution Two
function duplicateElements(arr){
    const duplicEle = []
    for (let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i])!== i){
            duplicEle.push(arr[i])
        }
    }
    return duplicEle
}
console.log(duplicateElements([9,8,6,7,1,3,2,4,5,6,8,7,4,5,6]));
Out:- [ 6, 8, 7, 4, 5, 6 ]
*/
