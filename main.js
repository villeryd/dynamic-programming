// this is a lesson in dynamic programming and memoization
let memo = {};
function fib(n) {
  let result;
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) {
    result = 1;
  } else result = fib(n - 1) + fib(n - 2);
  memo[n] = result;
  return result;
}

for (let i = 0; i <= 200; i++) {
  console.log(`fib(${i}) = ${fib(i)}`);
}
