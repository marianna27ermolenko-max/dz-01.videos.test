"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = void 0;
const express_1 = require("express");
const in_memory_db_1 = require("../db/in_memory.db");
const http_status_1 = require("../core/types/http_status");
exports.testingRouter = (0, express_1.Router)();
exports.testingRouter
    .delete("/testing/all-data", (req, res) => {
    in_memory_db_1.db.videos = [];
    res.sendStatus(http_status_1.HttpStatus.NO_CONTENT);
});
