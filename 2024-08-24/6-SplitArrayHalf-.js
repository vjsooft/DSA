// Split an Array in Half:
// Write a function that splits an array into two halves and returns them as an array of two arrays.

function splitArray(arr) {
    let Output = []
    let size = 3
    for (let i = 0; i < arr.length; i += size) {
        Output.push(arr.slice(i, i+ size))
    }
    return Output
}
console.log(splitArray([1, 2, 3, 4, 5, 6])); // Output: [[1, 2, 3], [4, 5, 6]]