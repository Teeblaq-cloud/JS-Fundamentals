function factorial(n) {
  if (isNaN(n) || n < 0) {
    return 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = Number(process.argv[2]);
console.log(factorial(arg));
// This code calculates the factorial of a number passed as a command line argument.