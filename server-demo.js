/*
 * :file description:
 * :name: /http-kora/server-demo.js
 * :author: 2oops
 * :copyright: (c) 2024, kora
 * :date created: 2024-12-24 17:54:50
 * :last editor: 2oops
 * :date last edited: 2024-12-25 11:50:48
 */
const http = require("http");

const serve = http.createServer(function (request, response) {
  // send HTTP header
  // HTTP status: 200 : OK
  // contentType: text/plain
  response.writeHead(200, { "Content-Type": "text/plain" });

  // send response data "Hello World"
  response.end("Hello World\n");
});

const PORT = 8003;
serve.listen(PORT, () => {
  console.log(`HTTP/2 server is running on https://localhost:${PORT}`);
});
