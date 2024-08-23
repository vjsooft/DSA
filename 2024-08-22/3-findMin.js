/*
 Generate 10 random integers between 0 to 10 with repetition.
 Write a JavaScript program to find the maximum number in an array. 
 Write a JavaScript program to find the minmum number in an array. 
*/
// Step 1
    let num = []
    for(let i=0; i < 10; i++){
        // Math.floor(Math.random()*10)
        num.push(Math.floor(Math.random()*10))
    }
    console.log("get Number", num);

// Step 2
function minNumb(arr){
    let minNum = arr[0];
    console.log(arr);
    for(let i=1; i<arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i]
        }
    }
    return minNum
}
let getMinNum = minNumb(num)


// Step 3
let num2= Math.min(...num)
console.log("===========>", num2);

// Step 4 testing
console.log(num2 === getMinNum);
