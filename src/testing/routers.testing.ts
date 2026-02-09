import { Router, Response, Request } from "express";
import { db } from "../db/in_memory.db";
import { HttpStatus } from "../core/types/http_status";
 
export const testingRouter = Router();

testingRouter
   .delete("/testing/all-data", (req: Request, res: Response) => {
   db.videos = [];
   res.sendStatus(HttpStatus.NO_CONTENT);
});