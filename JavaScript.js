//

let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
let newArr = arr.map(multi);
function multi(arr) {
  return arr ** 3;
}

console.log(newArr);
