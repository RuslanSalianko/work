import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.write(JSON.stringify({ message: 'my test message' }));
  res.end();
});

server.listen(3000, () => {
  console.log('start');
});
