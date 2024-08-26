// Q:- How To find second Largest and second Smaller value in array|Javascript Coding Interview Question

function secondLargestAndsecondSmallerEle(arr) {
  let larEle= arr[0];
   let secLarEle= arr[0];
   let smallEle= arr[0];
   let secSmallEle= arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (larEle < arr[i]) {
      secLarEle = larEle;
      larEle = arr[i];
      
    } else if (secLarEle < arr[i]) {
        secLarEle = arr[i];
    }
    if (smallEle > arr[i]) {
        secSmallEle = smallEle;
        smallEle = arr[i];
        
      } else if (secSmallEle > arr[i]) {
        secSmallEle = arr[i];
      }
}
// console.log('=========', secLarEle, larEle);
  return {larEle, secLarEle, smallEle, secSmallEle}
}
console.log(secondLargestAndsecondSmallerEle([5, 9, 7, 6, 4, 3, 2, 8, 4, 1]));
