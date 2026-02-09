"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const http_status_1 = require("../../core/types/http_status");
const in_memory_db_1 = require("../../db/in_memory.db");
const APIErrorResult_1 = require("../../core/utils/APIErrorResult");
const validation_video_input_dto_1 = require("../validation/validation.video.input-dto");
exports.videosRouter = (0, express_1.Router)();
exports.videosRouter
    .get("", (req, res) => {
    res.status(http_status_1.HttpStatus.OK).json(in_memory_db_1.db.videos);
})
    .get("/:id", (req, res) => {
    const idVideo = Number(req.params.id);
    const foundVideo = in_memory_db_1.db.videos.find((n) => n.id === idVideo);
    if (!foundVideo) {
        return res.sendStatus(http_status_1.HttpStatus.NOT_FOUND);
    }
    res.status(http_status_1.HttpStatus.OK).json(foundVideo);
})
    .post("", (req, res) => {
    const errors = (0, validation_video_input_dto_1.videoCreatedInputValidation)(req.body);
    if (errors.length > 0) {
        return res.status(http_status_1.HttpStatus.BAD_REQUEST).json((0, APIErrorResult_1.APIErrorResult)(errors));
    }
    const createVideo = req.body;
    const createdAt = new Date();
    const newVideo = {
        id: in_memory_db_1.db.videos.length ? in_memory_db_1.db.videos[in_memory_db_1.db.videos.length - 1].id + 1 : 1,
        title: createVideo.title,
        author: createVideo.author,
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: createdAt.toISOString(),
        publicationDate: new Date(createdAt.getTime() + 24 * 60 * 60 * 1000).toISOString(),
        availableResolutions: createVideo.availableResolutions,
    };
    in_memory_db_1.db.videos.push(newVideo);
    res.status(http_status_1.HttpStatus.CREATED).json(newVideo);
})
    .put("/:id", (req, res) => {
    const idVideo = Number(req.params.id);
    if (isNaN(idVideo) || !Number.isFinite(idVideo) || idVideo <= 0) {
        return res.sendStatus(http_status_1.HttpStatus.BAD_REQUEST);
    }
    const foundVideo = in_memory_db_1.db.videos.find((n) => n.id === idVideo);
    if (!foundVideo) {
        res.sendStatus(http_status_1.HttpStatus.NOT_FOUND);
        return;
    }
    const errors = (0, validation_video_input_dto_1.videoUpdateInputValidation)(req.body);
    if (errors.length > 0) {
        return res.status(http_status_1.HttpStatus.BAD_REQUEST).json((0, APIErrorResult_1.APIErrorResult)(errors));
    }
    const data = req.body;
    foundVideo.title = data.title;
    foundVideo.author = data.author;
    foundVideo.canBeDownloaded = data.canBeDownloaded;
    foundVideo.minAgeRestriction = data.minAgeRestriction;
    foundVideo.publicationDate = data.publicationDate;
    foundVideo.availableResolutions = data.availableResolutions;
    res.sendStatus(http_status_1.HttpStatus.NO_CONTENT);
})
    .delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    // 1️⃣ валидация id
    if (isNaN(id) || id <= 0) {
        return res.sendStatus(http_status_1.HttpStatus.BAD_REQUEST);
    }
    // 2️⃣ создаём новый массив без видео с этим id
    const filteredVideos = in_memory_db_1.db.videos.filter(v => v.id !== id);
    // 3️⃣ если длина не изменилась — значит такого id не было
    if (filteredVideos.length === in_memory_db_1.db.videos.length) {
        return res.sendStatus(http_status_1.HttpStatus.NOT_FOUND);
    }
    // 4️⃣ сохраняем новый массив
    in_memory_db_1.db.videos = filteredVideos;
    // 5️⃣ успешное удаление
    return res.sendStatus(http_status_1.HttpStatus.NO_CONTENT);
});
