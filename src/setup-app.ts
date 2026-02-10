import express, { Express, Request, Response } from "express";
import { videosRouter } from "./videos/routers/video.routers";
import { testingRouter } from "./testing/routers.testing";
import { setupSwagger } from "./core/swagger/setup-swagger";


export const setupApp = (app: Express) => {

    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        
        res.status(200).send("Hello world!")
    });
    
    app.delete('/delete', (req: Request, res: Response) => {
        
        res.sendStatus(204);
    });

    app.use('/videos', videosRouter);
    app.use('/testing', testingRouter);

    setupSwagger(app);
 
    return app; 
}