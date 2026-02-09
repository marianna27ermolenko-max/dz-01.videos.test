"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoUpdateInputValidation = exports.videoCreatedInputValidation = void 0;
const videos_1 = require("../types/videos");
const videoCreatedInputValidation = (data) => {
    const errors = [];
    if (!data.title || typeof data.title !== "string" || data.title.trim().length > 40) {
        errors.push({ field: "title", message: "Invalid title" });
    }
    if (!data.author || typeof data.author !== "string" || data.author.trim().length > 20) {
        errors.push({ field: "author", message: "Invalid author" });
    }
    if (!Array.isArray(data.availableResolutions)) {
        errors.push({ field: "availableResolutions", message: "AvailableResolutions must be array" });
    }
    else if (data.availableResolutions.length === 0) {
        errors.push({ field: "availableResolutions", message: "Invalid availableResolutions" });
    }
    else if (data.availableResolutions.some((item) => typeof item !== "string")) {
        errors.push({ field: "availableResolutions", message: "Invalid availableResolutions of type" });
    }
    else if (data.availableResolutions.some((item) => !Object.values(videos_1.Resolutions).includes(item))) {
        errors.push({ field: "availableResolutions", message: "Invalid availableResolutions value" });
    }
    return errors;
};
exports.videoCreatedInputValidation = videoCreatedInputValidation;
const videoUpdateInputValidation = (data) => {
    const errors = [];
    if (!data.title || typeof data.title !== "string" || data.title.trim().length > 40) {
        errors.push({ field: "title", message: "Invalid title" });
    }
    if (!data.author || typeof data.author !== "string" || data.author.trim().length > 20) {
        errors.push({ field: "author", message: "Invalid author" });
    }
    if (!Array.isArray(data.availableResolutions)) {
        errors.push({ field: "availableResolutions", message: "AvailableResolutions must be array" });
    }
    else if (data.availableResolutions.length === 0) {
        errors.push({ field: "availableResolutions", message: "Invalid availableResolutions" });
    }
    else if (data.availableResolutions.some((item) => typeof item !== "string")) {
        errors.push({ field: "availableResolutions", message: "Invalid availableResolutions of type" });
    }
    else if (data.availableResolutions.some((item) => !Object.values(videos_1.Resolutions).includes(item))) {
        errors.push({ field: "availableResolutions", message: "Invalid availableResolutions value" });
    }
    if (typeof data.canBeDownloaded !== "boolean") {
        errors.push({ field: "canBeDownloaded", message: "Invalid canBeDownloaded" });
    }
    if (data.minAgeRestriction !== null &&
        (typeof data.minAgeRestriction !== "number" || data.minAgeRestriction < 1 || data.minAgeRestriction > 18)) {
        errors.push({
            field: "minAgeRestriction",
            message: "MinAgeRestriction must be null or number between 1 and 18",
        });
    }
    if (!data.publicationDate || typeof data.publicationDate !== "string") {
        errors.push({ field: "publicationDate", message: "Invalid publicationDate" });
    }
    console.log(errors);
    return errors;
};
exports.videoUpdateInputValidation = videoUpdateInputValidation;
