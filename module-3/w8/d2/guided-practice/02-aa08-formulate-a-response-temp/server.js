// server.js
const http = require("http");

const server = http.createServer((request, response) => {
  // ...

  // console.log(req.method);
  // console.log(response)

  // set the status code
  response.statusCode = 200;

  // set the header
  response.setHeader("Content-Type", "text/html");

  // set the body
  const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;
  // response.write(responseBody);
  response.end(responseBody);
  return;
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
