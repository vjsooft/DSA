/*
 Generate 10 random integers between 0 to 10 with repetition.
 Write a JavaScript program to find the maximum number in an array. 
 Write a JavaScript program to find the minmum number in an array. 
*/

// Step 1 :- Generate 10 random
let max2Nun = []
for (let i = 0; i < 10; i++) {
    min2Nun.push(Math.floor(Math.random() * 10))
}

max2Nun = Array.from(new Set(max2Nun))

// Step 2 :- find 2nd max number
function get2ndMax(arr){
    let maxVal = arr[0]

    for(let i=1; i < arr.length; i++){
        if(arr[i] < maxVal){
            maxVal
        }
    }
    }
    get2ndMax(max2Nun)