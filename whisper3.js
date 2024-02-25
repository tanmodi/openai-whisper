import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let errorOccurred = false;
for (let i = 1; i <= 7; i++) {
    const audioName = `./audio_files_mp3/cut/How_to_Speak_(320 kbps)_0${i}.mp3`;
    async function main() {
        const transcription = await openai.audio.transcriptions.create({
            file: fs.createReadStream(
                audioName
            ),
            model: "whisper-1",
        });

        console.log(transcription.text);
        return transcription.text;
    }
    const result = await main();
    // const result = `hey world ${i}`;
    const filePath = `./result/How_to_Speak_(320 kbps)/How_to_Speak_(320 kbps)_0${i}.txt`;

    if (!fs.existsSync(filePath)) {
        // Create directory if it doesn't exist
        const directoryPath = `./result/How_to_Speak_(320 kbps)`;
        if (!fs.existsSync(directoryPath)) {
            fs.mkdirSync(directoryPath, { recursive: true });
            console.log("Directory created successfully.");
            
        }
        // Write to file
        
    } else {
        
        console.log("File already exists:", filePath);
    }
    fs.writeFile(filePath, result, (err) => {
        if (err) {
            console.log("Error writing to file:");
            errorOccurred = true;
        }
        console.log("String has been written to the file successfully.");
    });
    if(errorOccurred) {
        break;
    }
}
console.log("Done");
