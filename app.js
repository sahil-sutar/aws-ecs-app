const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from AWS ECS Fargate Container!');
});
server.listen(port, () => console.log(`Server running on ${port}`));

