/**
 * @description: this is a demo to print "hello world"
 * @author: 2oops
 * @Date 2018.11.18
 */

// Starting with the server module
let http = require("http");

http.createServer(function (request, response) {

    // send HTTP header
    // HTTP status: 200 : OK
    // contentType: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // send response data "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// the terminal prints the following information
console.log('Server running at http://127.0.0.1:8888/');