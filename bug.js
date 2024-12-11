const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//The issue is that the error handling is not robust. If an error occurs during the request handling, it will not be caught, and the server will crash.

//Example of an error that could occur:

//const fs = require('fs');

//server.on('request', (req, res) => {
//  fs.readFile('./nonexistent.txt', (err, data) => {
//    if (err) {
//      console.error('Error reading file:', err);
//      res.statusCode = 500; //Set status code to 500 for internal server error
//      res.end('Internal Server Error');
//    } else {
//      res.end(data);
//    }
//  });
//});