function countOccurrences(arr, element) {
    let countItem = {}
    arr.forEach(key => {
        countItem[key] = countItem[key] +1 || 1
    });
    return countItem
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4, 5], 2)); // Output: 3