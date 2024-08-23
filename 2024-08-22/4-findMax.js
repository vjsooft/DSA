/*
 Generate 10 random integers between 0 to 10 with repetition.
 Write a JavaScript program to find the maximum number in an array. 
 Write a JavaScript program to find the minmum number in an array. 
*/
// Step 1
let max = []
for (let i = 0; i < 10; i++) {
    max.push(Math.floor(Math.random() * 10))
}
console.log(max);

// Step 2
function getMax(arr) {
    let maxNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return maxNum
}
let maxnum1 = getMax(max)
// console.log("========>", maxnum1);

// Step 3
let maxNum2 = Math.max(...max)
console.log("========>", maxNum2);

console.log("========>", maxnum1===maxNum2);