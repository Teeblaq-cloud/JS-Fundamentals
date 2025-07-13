function add(a, b) {
  return a + b;
}

const args = process.argv.slice(2);
const num1 = Number(args[0]);
const num2 = Number(args[1]);

console.log(add(num1, num2));
// This code takes two command line arguments, converts them to numbers, and prints their sum.
// If the arguments are not valid numbers, it will print NaN.