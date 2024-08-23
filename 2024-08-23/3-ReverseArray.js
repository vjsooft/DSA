function reverseArray(arr) {
    let result = []
    
    for(let i = arr.length -1; i >= 0; i--){
        result.push(arr[i])
    }
    return result
}

console.log('==>', reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]