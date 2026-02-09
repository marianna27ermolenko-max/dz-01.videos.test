import { Request, Response, Router } from "express";
import { HttpStatus } from "../../core/types/http_status";
import { db } from "../../db/in_memory.db";
import { Video, Resolutions } from "../types/videos";
import {
  CreateVideoInputModel,
  UpdateVideoInputModel,
} from "../dto/video.input-dto";
import { APIErrorResult } from "../../core/utils/APIErrorResult";
import {
  videoCreatedInputValidation,
  videoUpdateInputValidation,
} from "../validation/validation.video.input-dto";

export const videosRouter = Router();

videosRouter
  .get("", (req: Request, res: Response) => {
    res.status(HttpStatus.OK).json(db.videos);
  })

  .get("/:id", (req: Request, res: Response) => {
    const idVideo = Number(req.params.id);
    const foundVideo = db.videos.find((n) => n.id === idVideo);

    if (!foundVideo) {
       return res.sendStatus(HttpStatus.NOT_FOUND);   
    }
    res.status(HttpStatus.OK).json(foundVideo);
  })
  .post("", (req: Request, res: Response) => {

    const errors = videoCreatedInputValidation(req.body);
    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).json(APIErrorResult(errors));
    }

    const createVideo: CreateVideoInputModel = req.body;

    const createdAt = new Date();

    const newVideo: Video = {
      id: db.videos.length ? db.videos[db.videos.length - 1].id + 1 : 1,
      title: createVideo.title,
      author: createVideo.author,
      canBeDownloaded: false,
      minAgeRestriction: null,
      createdAt: createdAt.toISOString(),
      publicationDate: new Date(createdAt.getTime() + 24 * 60 * 60 * 1000).toISOString(),
      availableResolutions: createVideo.availableResolutions,
    };
    db.videos.push(newVideo);
    res.status(HttpStatus.CREATED).json(newVideo);
  })

  .put("/:id", (req: Request, res: Response) => {

    const idVideo = Number(req.params.id);

    if (isNaN(idVideo) || !Number.isFinite(idVideo) || idVideo <= 0){
      return res.sendStatus(HttpStatus.BAD_REQUEST);
    }

    const foundVideo = db.videos.find((n) => n.id === idVideo);

    if (!foundVideo) {
      res.sendStatus(HttpStatus.NOT_FOUND);
      return;
    }

    const errors = videoUpdateInputValidation(req.body);
    if (errors.length > 0) {
      return res.status(HttpStatus.BAD_REQUEST).json(APIErrorResult(errors));
    }

    const data: UpdateVideoInputModel = req.body;

      foundVideo.title = data.title;
      foundVideo.author = data.author;
      foundVideo.canBeDownloaded = data.canBeDownloaded;
      foundVideo.minAgeRestriction = data.minAgeRestriction;
      foundVideo.publicationDate = data.publicationDate;
      foundVideo.availableResolutions = data.availableResolutions;

    res.sendStatus(HttpStatus.NO_CONTENT);
  })

 .delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.sendStatus(HttpStatus.BAD_REQUEST);
  }

  const filteredVideos = db.videos.filter(v => v.id !== id);

  if (filteredVideos.length === db.videos.length) {
    return res.sendStatus(HttpStatus.NOT_FOUND);
  }

  db.videos = filteredVideos;

  return res.sendStatus(HttpStatus.NO_CONTENT);
});
