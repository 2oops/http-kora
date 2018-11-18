/**
 * @description: project entrance
 * @author 2oops
 * @Date 2018.11.18
 */

let server = require("./server");
let router = require("./router");
let requestHandlers = require("./requestHandlers");
let handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
