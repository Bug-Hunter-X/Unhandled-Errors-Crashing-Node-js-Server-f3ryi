const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  try {
    fs.readFile('./myFile.txt', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.end(data);
      }
    });
  } catch (error) {
    console.error('Server Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', err => {
  console.error('Server error:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
// Create a sample file
fs.writeFile('./myFile.txt', 'Hello, world!', err => {
  if (err) console.error('Error creating sample file:', err);
});