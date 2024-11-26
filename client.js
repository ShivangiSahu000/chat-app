const net = require('net'); // Import the 'net' module to create TCP connections
const readline = require('readline'); // Import the 'readline' module to handle input from the command line

// Create a connection to the server on port 8080
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server'); // Log when the connection is established
});

// Create a readline interface for reading input from the command line and outputting it
const rl = readline.createInterface({
    input: process.stdin,            // Read input from the standard input (keyboard)
    output: process.stdout          // Write output to the standard output (console)
});

// Event handler for receiving data from the server
client.on('data', (data) => {
    console.log(data.toString().trim());  // Log the received data after trimming any extra spaces
});

// Event handler for reading lines from the command line input
rl.on('line', (line) => {
    client.write(line); // Send the input line to the server
});

//error handler for the client
client.on('error', (err) => { 
    console.error(`Server error: ${err.message}`);  // Log any errors that occur
    client.end(); // End the client connection
});