/*
 * :file description:
 * :name: /http-kora/requestHandlers.js
 * :author: 2oops
 * :copyright: (c) 2024, kora
 * :date created: 2024-12-24 17:54:50
 * :last editor: 2oops
 * :date last edited: 2024-12-25 11:47:19
 */
const fs = require("fs");
const formidable = require("formidable");

function start(response) {
  console.log("Request handler 'start' was called.");
  let body =
    "<html>" +
    "<head>" +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    "</head>" +
    "<body>" +
    '<form action="/upload" enctype="multipart/form-data" ' +
    'method="post">' +
    '<input type="file" name="upload" multiple="multiple">' +
    '<input type="submit" value="Upload file" />' +
    "</form>" +
    "</body>" +
    "</html>";

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(body);
  response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  let form = new formidable.IncomingForm();

  console.log("about to parse");

  form.parse(request, function (error, fields, files) {
    console.log("parsing done");

    fs.renameSync(files.upload.path, "/tmp/test.png");

    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}

function show(response) {
  console.log("Request handler 'show' was called.");

  fs.readFile("/tmp/test.png", "binary", function (error, file) {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain" });
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "image/png" });
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
