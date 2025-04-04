function prime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log(false);
    } else {
      console.log(true);
    }
  }
}

prime(5); // true
// prime(10); // false
