// Q:- how to find even or odd numbers in array in javascript| Coding Interview Questions #7

let arr = [8, 6, 4, 7, 1, 4, 3, 2, 6, 5];

function eveoddEle(arr) {
  const evenEle = [];
  const oddEle = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        evenEle.push(arr[i])
      console.log("even Number", arr[i]);
    }
    if (arr[i] % 2 !== 0) {
        oddEle.push(arr[i])
      console.log("odd Number", arr[i]);
    }
  }
  return {evenEle, oddEle}
}
console.log(eveoddEle(arr));
