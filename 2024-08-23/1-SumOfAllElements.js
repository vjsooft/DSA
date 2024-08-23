function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
sumArray([1, 2, 3, 4])

/*
Three Types of cases
1:- General scenerio 
2:- Special  scenerio
3:- Corner scenerio
*/

// / Test Case 1: Normal case
console.assert(sumArray([1, 2, 3, 4]) === 10, 'Test Case 1 Failed');

// Test Case 2: Empty array
console.assert(sumArray([]) === 0, 'Test Case 2 Failed');

// Test Case 3: Single element array
console.assert(sumArray([5]) === 5, 'Test Case 3 Failed');

// Test Case 4: Negative numbers
console.assert(sumArray([-1, -2, -3, -4]) === -10, 'Test Case 4 Failed');

// Test Case 5: Array with zeros
console.assert(sumArray([0, 0, 0, 0]) === 0, 'Test Case 5 Failed');

// Test Case 6: Mixed positive and negative numbers
console.assert(sumArray([1, -2, 3, -4]) === -2, 'Test Case 6 Failed');

console.log("All test cases passed!");


