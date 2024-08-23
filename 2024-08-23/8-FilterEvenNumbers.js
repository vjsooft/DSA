function filterEvenNumbers(arr) {
  let eveNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      eveNum.push(arr[i]);
    }
  }
  return eveNum;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
