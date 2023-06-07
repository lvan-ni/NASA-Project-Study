"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var app_1 = require("./app");
var PORT = process.env.PORT || 8000;
var server = http_1.default.createServer(app_1.app);
server.listen(PORT, function () {
    console.log("Listening on port ".concat(PORT, "..."));
});
