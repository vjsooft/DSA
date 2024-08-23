"use strict";

function mostFrequent(arr) {
  var maxcount = 0;
  var element_having_max_freq;

  for (var i = 0; i < arr.length; i++) {
    console.log('=====arr[i]========>', arr[i]);
    var count = 0;

    for (var j = 0; j < arr.length; j++) {
      console.log('====arr[j]=========>', arr[j]);
      if (arr[i] == arr[j]) count++;
    }

    if (count > maxcount) {
      maxcount = count;
      element_having_max_freq = arr[i];
    }
  }

  return element_having_max_freq;
}

var arr = [1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 1, 3, 3, 2];
console.log(mostFrequent(arr));