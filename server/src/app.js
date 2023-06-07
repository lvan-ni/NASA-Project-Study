"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = require("express");
var app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
