// Recursive function to compute factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Get first argument and convert to integer
const num = parseInt(process.argv[2]);

// If argument is NaN, factorial is 1
console.log(factorial(isNaN(num) ? 0 : num));
