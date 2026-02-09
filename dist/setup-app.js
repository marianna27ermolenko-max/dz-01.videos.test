"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const express_1 = __importDefault(require("express"));
const video_routers_1 = require("./videos/routers/video.routers");
const routers_testing_1 = require("./testing/routers.testing");
const setup_swagger_1 = require("./core/swagger/setup-swagger");
const setupApp = (app) => {
    app.use(express_1.default.json());
    app.get('/', (req, res) => {
        res.status(200).send("Hello world!");
    });
    app.use('/api/videos', video_routers_1.videosRouter);
    app.use('/api/testing', routers_testing_1.testingRouter);
    (0, setup_swagger_1.setupSwagger)(app);
    return app;
};
exports.setupApp = setupApp;
