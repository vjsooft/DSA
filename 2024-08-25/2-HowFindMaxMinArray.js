// Q:- How To find max/min in a given array in javascript| Coding Interview Questions - #2

// Solution One
/*
function findMinMaxElements(arr){
    let minNumber = Math.min(...arr);
    let maxNumber = Math.max(...arr);
    return {minNumber, maxNumber}
}
console.log(findMinMaxElements([5,9,8,7,6,3,4,1,2]));
*/

// Solution Two
function findMinMaxElements(arr){
    let minNumber = arr[0];
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if(minNumber > arr[i]){
            minNumber = arr[i]
        }
        if(maxNumber < arr[i]){
            maxNumber = arr[i]
        }
    }
    return {minNumber, maxNumber}
}
console.log(findMinMaxElements([5,9,8,7,6,3,4,1,2]));
