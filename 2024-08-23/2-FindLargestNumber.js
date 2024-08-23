function findLargest(arr) {
  let maxVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxVal < arr[i]) {
      maxVal = arr[i];
    }
  }
  return maxVal;
}
console.log("-------->", findLargest([10, 24, 3, 45, 7])); // Output: 45
