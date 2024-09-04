const readline = require('readline');

// Create an interface to read from standard input and write to standard output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('What is your favorite programming language? ', (answer) => {
    // Output the user's input
    console.log(`Your favorite programming language is: ${answer}`);
    
    // Close the readline interface
    rl.close();
});
