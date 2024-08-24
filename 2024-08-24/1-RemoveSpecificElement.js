// Remove Specific Element:
// Write a function that removes all occurrences of a specific element from an array.

function removeElement(arr, ele) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === ele) {
            arr.splice(i, 1);
        }
    }
    return arr;

}
console.log(removeElement([1, 2, 3, 2, 4,4,4,4,4,4, 5], 2)); // Output: [1, 3, 4, 5]