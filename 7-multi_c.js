const args = process.argv.slice(2);
const count = Number(args[0]);

if (isNaN(count)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
}
// This code takes a command line argument and prints "C is fun" that many times.