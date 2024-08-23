/*
 Generate 10 random integers between 0 to 10 with repetition.
 Write a JavaScript program to find the maximum number in an array. 
 Write a JavaScript program to find the minmum number in an array. 
*/

// Step 1 :- Generate 10 random
let min2Nun = []
for (let i = 0; i < 10; i++) {
    min2Nun.push(Math.floor(Math.random() * 10))
}

min2Nun = Array.from(new Set(min2Nun))
  
console.log(min2Nun);

// Step 2 :- find 2nd min number
function get2MinNum(arr) {
    let minv = arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i] < minv){
            minv = arr[i]
        }
    }
    let min2v = 999
    /*
    min2v 999 keyou set keya hai?
    hum badi value se suru krege or find krte krte chote value tak jaatege
     */
    for(let j = 0; j < arr.length; j++ ){
        if(arr[j] < min2v && arr[j]!= minv){
            min2v = arr[j]
        }
    }
    return min2v
}
let finalVal = get2MinNum(min2Nun)
// console.log("===========>", finalVal);


// Step 3 :- using sort

let builtMath = min2Nun.sort()
console.log("===>", builtMath[1]);


