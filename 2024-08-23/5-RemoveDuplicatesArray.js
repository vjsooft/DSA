// 1 :- Option Using Custom
/*
function removeDuplicates(arr) {
    let Output = []
    for(let i=0; i<arr.length;i++){
        if(!Output.includes(arr[i])){
            Output.push(arr[i])
        }
    }
    return Output
}
*/
// 2:- Option Using Filter
/*
function removeDuplicates(arr) {
    return output = arr.filter((ele, index)=>  arr.indexOf(ele) === index)
}
*/
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]