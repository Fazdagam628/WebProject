"use strict";

// function find_average(array) {
//   if (array.length === 0) {
//     return 0;
//   }
//   var result = 0;
//   for (i = 0; i < array.length; i++) {
//     result += array[i];
//   }
//   return result / array.length;
// }
// console.log(find_average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function getAverage(scores) {
  var sum = 0;

  for (var i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}

console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));