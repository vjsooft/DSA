// Check if Array is Empty:
// Write a function that checks if an array is empty. Return true if it is empty, otherwise return false.

function isEmptyArray(arr) {
    if(arr.length === 0){
        return true
    }else{
        return false
    }
}

// console.log(isEmptyArray([])); // Output: true
console.log(isEmptyArray([1, 2, 3])); // Output: false