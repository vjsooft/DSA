let arr = [1, 5, 43, 9];
// const result = arr.reduce((a, b)=> a+b);
// console.log(result);

function addSumEle(arr) {
  totalVal = 0;
  for (let i = 0; i < arr.length; i++) {
     totalVal += arr[i];
  }
  return totalVal
}
console.log("========>", addSumEle(arr));
