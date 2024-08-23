function containsElement(arr, element) {
  let Output = false;
  if (arr.includes(element)) {
    Output = true;
  } else {
    Output = false;
  }
  return Output;
}

console.log(containsElement([1, 2, 3, 4], 1)); // Output: true
