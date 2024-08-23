function filterOddNumbers(arr) {
  let oddNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNum.push(arr[i]);
    }
  }
  return oddNum;
}

console.log(filterOddNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
