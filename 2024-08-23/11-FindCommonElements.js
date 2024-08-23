function findCommonElements(arr1, arr2) {
    let commonEle = {}
    let Output = arr1.concat(arr2)
    Output.forEach(key => {
        commonEle[key] = commonEle[key] +1 || 1
    });
    return commonEle
}
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]