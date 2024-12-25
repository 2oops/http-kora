/*
 * :file description:
 * :name: /http-kora/router.js
 * :author: 2oops
 * :copyright: (c) 2024, kora
 * :date created: 2024-12-24 17:54:50
 * :last editor: 2oops
 * :date last edited: 2024-12-25 11:42:02
 */
function route(handle, pathname, response, request) {
  console.log("About to route a request for " + pathname);

  if (typeof handle[pathname] === "function") {
    handle[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
