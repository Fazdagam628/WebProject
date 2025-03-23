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
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum / scores.length;
}

console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Class average
// function getAverage(scores) {
//   let sum = 0;
//
//   for (const score of scores) {
//     sum += score;
//   }
//
//   return sum / scores.length;
// }
//
// function getGrade(score) {
//   if (score === 100) {
//     return "A++";
//   } else if (score >= 90) {
//     return "A";
//   } else if (score >= 80) {
//     return "B";
//   } else if (score >= 70) {
//     return "C";
//   } else if (score >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
//
// function hasPassingGrade(score) {
//   return getGrade(score) !== "F";
// }
//
// function studentMsg(totalScores, studentScore) {
//   let sum = 0;
//   for (let i = 0; i < totalScores.length; i++) {
//     sum += totalScores[i];
//   }
//   let classAverage = sum / totalScores.length;
//
//   if (getGrade(studentScore) !== "F") {
//     return `Class average: ${classAverage}. Your grade: ${getGrade(
//       studentScore
//     )}. You passed the course.`;
//   } else {
//     return `Class average: ${classAverage}. Your grade: ${getGrade(
//       studentScore
//     )}. You failed the course.`;
//   }
// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
