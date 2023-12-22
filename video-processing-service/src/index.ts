import express from "express";
import ffmpeg from "fluent-ffmpeg";

const app = express();
const port = 3000;


 
app.listen(port, () => {
    console.log(`video processing service listening at http://localhost:${port}`)

});