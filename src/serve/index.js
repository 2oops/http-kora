/*
 * :file description:
 * :name: /http-kora/src/serve/index.js
 * :author: 2oops
 * :copyright: (c) 2024, kora
 * :date created: 2024-12-24 17:54:50
 * :last editor: 2oops
 * :date last edited: 2024-12-25 11:56:26
 */

let http = require("http");
let url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request);
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
