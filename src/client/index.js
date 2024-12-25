/*
 * :file description:
 * :name: /http-kora/index.js
 * :author: 2oops
 * :copyright: (c) 2024, kora
 * :date created: 2024-12-24 17:54:50
 * :last editor: 2oops
 * :date last edited: 2024-12-25 11:42:11
 */

let server = require("../serve");
let router = require("../router");
let requestHandlers = require("./requestHandlers");
let handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
