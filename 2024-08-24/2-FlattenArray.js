// Flatten an Array:
// Write a function that flattens a nested array (i.e., an array of arrays) into a single-level array.

function flattenArray(arr) {
    // Option One
    // let Output = arr.flat()

    // Option Two
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
           newArr.push(...arr[i])
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(flattenArray([1, [2, 3], [4, 5], 6])); // Output: [1, 2, 3, 4, 5, 6]