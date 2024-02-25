const MP3Cutter = require('mp3-cutter');
// import OpenAI from "openai";
// import dotenv from "dotenv";
const fs = require('fs');


if (!fs.existsSync('./audio_files_mp3/cut/How_to_Speak_(320 kbps)')) {
    fs.mkdirSync('./audio_files_mp3/cut');
    console.log('Directory created successfully.');
}

// dotenv.config();
// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

mp3Cutter.cut({
    src: "./audio_files_mp3/How_to_Speak_(320 kbps).mp3",
    target: "./audio_files_mp3/cut/How_to_Speak_(320 kbps)/How_to_Speak_(320 kbps).mp3",
    start: 25,
    end: 70,
});
