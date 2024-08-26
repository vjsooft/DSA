function finPrime(num) {
  if (num == 1 || num < 1) {
    console.log("not prime no.");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i !== 0) {
        console.log('not prime number')
      }else{
        console.log('yes this is prime number')
      }
    }
  }
}
console.log(finPrime(14));
