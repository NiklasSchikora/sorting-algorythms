export function findPrimes(n: i32): i32[] {
  let products: i32[] = [];
  let upperRange: i32 = Math.sqrt(n) as i32;
  let primes: i32[] = [2];

  for (let i: i32 = 0; i < n; i++) {
    products.push(1);
  }

  for (let i: i32 = 3; i <= upperRange; i += 2) {
    if (products[i]) {
      for (let j: i32 = i * i; j < n; j += i * 2) {
        products[j] = 0;
      }
    }
  }

  for (let i: i32 = 3; i < n; i += 2) {
    if (products[i]) {
      primes.push(i);
    }
  }
  return primes;
}
