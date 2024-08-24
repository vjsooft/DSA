// / Calculate the Average:
// Write a function that calculates the average of all elements in an array.

function calculateAverage(arr) {
    let Output = 0;
    for (let i = 0; i < arr.length; i++) {
        Output+= arr[i]
    }
    let finalOut = (Output / arr.length)
    console.log('=>',Math.floor(finalOut));
}

console.log(calculateAverage([1, 2, 3, 4, 5,9,8])); // Output: 3