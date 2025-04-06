function count(n) {
  for (let i = 0; i < 100000; i++) {
    if (n === i) {
      console.log(`Nomor anda ${i}`);
    }
  }
}

count(10);
