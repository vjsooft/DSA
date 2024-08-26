// Q:- How to Find missing elements in a given Array 1 to 10|Javascript Coding Interview Question

let arr = [8, 6, 7, 4, 9, 3, 1];
const newArr = [];
const missingVal = (arr) => {
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);
  //   let minVal = arr[0];
  //   let maxVal = arr[0];
  //   for (let i = 0; i < arr.length; i++) {
  //     // const element = array[i];
  //     if (minVal > arr[i]) {
  //       minVal = arr[i];
  //     }
  //     if (maxVal < arr[i]) {
  //         maxVal = arr[i];
  //       }
  //   }
  for (let i = minVal; i <= maxVal; i++) {
    console.log('===Inside Check====>', arr.indexOf(i) <0 );
    
    if (arr.indexOf(i) < 0) {
      newArr.push(i);
    }
  }
  //   return (newArr)
};
console.log(missingVal(arr));
console.log("========>", newArr);
