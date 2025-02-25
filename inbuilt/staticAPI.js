// // read a file and send the response
// let fs = require('fs');
// let http = require('http');

// let server = http.createServer(function(req,res){
//     //read file with fs
//     fs.readFile('city.json','utf-8',function(err,data){
//         if(err) throw err;
//         // return data of that
//         res.write(data);
//         res.end();
//     });
// });

// server.listen(6300);

const fs = require('fs'); // Import File System module
const http = require('http'); // Import HTTP module

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header to serve JSON content
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Read file 'city.json' asynchronously
    fs.readFile('city.json', 'utf-8', (err, data) => {
        if (err) {
            // If error occurs, send error response
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error: Unable to read file');
        } else {
            // Send the file content as response
            res.end(data);
        }
    });
});

// Define the port to listen on
const PORT = 6300;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// How to run this file:
// Run in terminal: node staticAPI.js

// Entry point in a project:
// - In a real-world project, check `package.json` for the `"start"` script.
// - The entry point is usually defined under `"main"` (e.g., "main": "index.js").
// - To start the server using npm: `npm start`
// - npm init