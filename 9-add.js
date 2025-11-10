// Function that adds two numbers
function add(a, b) {
  return a + b;
}

// Get arguments from the command line
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

// Calculate sum and print
console.log(add(arg1, arg2));
