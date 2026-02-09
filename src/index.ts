import express from "express";
import  { setupApp } from "./setup-app"

const app = express();
setupApp(app);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`) 
})