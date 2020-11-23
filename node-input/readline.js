const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//   rl.close();
// });

let count = 0;
rl.on('line', (input) => {
  console.log(`Recived : ${input}`);
  count++;
  if (count === 5) {
    rl.close();
  }
});

// rl.on('resume', () => {
//   //
// });
