// Find the Smallest Number:
// Write a function that returns the smallest number in an array.

function findSmallest(arr) {
  let smallerEle = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (smallerEle > arr[i]) {
      smallerEle = arr[i];
    }
  }
  return smallerEle;
}
console.log(findSmallest([10, 24, 3, 45, 7])); // Output: 3
