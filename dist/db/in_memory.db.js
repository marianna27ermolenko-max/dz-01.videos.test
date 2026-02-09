"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const videos_1 = require("../videos/types/videos");
exports.db = {
    videos: [
        {
            id: 1,
            title: "Learn TypeScript",
            author: "Alice",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date().toISOString(),
            availableResolutions: [videos_1.Resolutions.P144, videos_1.Resolutions.P360, videos_1.Resolutions.P720],
        },
        {
            id: 2,
            title: "JavaScript Basics",
            author: "Bob",
            canBeDownloaded: false,
            minAgeRestriction: 12,
            createdAt: new Date().toISOString(),
            publicationDate: new Date().toISOString(),
            availableResolutions: [videos_1.Resolutions.P240, videos_1.Resolutions.P480, videos_1.Resolutions.P1080],
        },
        {
            id: 3,
            title: "Node.js in Depth",
            author: "Charlie",
            canBeDownloaded: false,
            minAgeRestriction: 16,
            createdAt: new Date().toISOString(),
            publicationDate: new Date().toISOString(),
            availableResolutions: [videos_1.Resolutions.P360, videos_1.Resolutions.P720, videos_1.Resolutions.P1080],
        },
        {
            id: 4,
            title: "React for Beginners",
            author: "Diana",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date().toISOString(),
            availableResolutions: [videos_1.Resolutions.P144, videos_1.Resolutions.P240, videos_1.Resolutions.P360, videos_1.Resolutions.P480],
        },
        {
            id: 5,
            title: "Advanced CSS Tricks",
            author: "Eve",
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date().toISOString(),
            availableResolutions: [videos_1.Resolutions.P720, videos_1.Resolutions.P1080, videos_1.Resolutions.P1440],
        },
    ]
};
