export const findPrimes = (n) => {
  let products = [];
  let upperRange = Math.sqrt(n);
  let primes = [2];

  for (let i = 0; i < n; i++) {
    products.push(1);
  }

  for (let i = 3; i <= upperRange; i += 2) {
    if (products[i]) {
      for (let j = i * i; j < n; j += i * 2) {
        products[j] = 0;
      }
    }
  }

  for (let i = 3; i < n; i += 2) {
    if (products[i]) {
      primes.push(i);
    }
  }
  return primes;
};
