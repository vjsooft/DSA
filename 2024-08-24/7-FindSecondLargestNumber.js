// Find the Second Largest Number:
// Write a function that finds the second largest number in an array.

function findSecondLargest(arr) {
  let largNumb = arr[0];
  let secLargNumb = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if(largNumb < arr[i]){
        secLargNumb = largNumb
        largNumb = arr[i]
    }else if(secLargNumb < arr[i]){
        secLargNumb = arr[i]
    }
  }
  return secLargNumb;
}
console.log(findSecondLargest([1,2,3,10, 24, 3, 45, 7])); // Output: 24
