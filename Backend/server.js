const http = require('node:http');

const server = http.createServer((req, res) => {
  const data = { 
    message: "Hello from the Backend!",
    timestamp: new Date().toLocaleTimeString()
  }
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

server.listen(3000, 'localhost', () => {
  console.log('Listening on 127.0.0.1:3000');
});
