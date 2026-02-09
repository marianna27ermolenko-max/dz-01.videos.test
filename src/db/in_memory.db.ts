import { Resolutions, Video } from "../videos/types/videos";

export const db = {

    videos: <Video[]> [

 {
      id: 1,
      title: "Learn TypeScript",
      author: "Alice",
      canBeDownloaded: false,
      minAgeRestriction: null,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
      availableResolutions: [Resolutions.P144, Resolutions.P360, Resolutions.P720],
    },
    {
      id: 2,
      title: "JavaScript Basics",
      author: "Bob",
      canBeDownloaded: false,
      minAgeRestriction: 12,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
      availableResolutions: [Resolutions.P240, Resolutions.P480, Resolutions.P1080],
    },
    {
      id: 3,
      title: "Node.js in Depth",
      author: "Charlie",
      canBeDownloaded: false,
      minAgeRestriction: 16,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
      availableResolutions: [Resolutions.P360, Resolutions.P720, Resolutions.P1080],
    },
    {
      id: 4,
      title: "React for Beginners",
      author: "Diana",
      canBeDownloaded: false,
      minAgeRestriction: null,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
      availableResolutions: [Resolutions.P144, Resolutions.P240, Resolutions.P360, Resolutions.P480],
    },
    {
      id: 5,
      title: "Advanced CSS Tricks",
      author: "Eve",
      canBeDownloaded: false,
      minAgeRestriction: null,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
      availableResolutions: [Resolutions.P720, Resolutions.P1080, Resolutions.P1440],
    },

    ]
}