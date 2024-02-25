import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";
const startTime = Date.now();
dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

let errorOccurred = false;
for (let i = 0; i <2; i++) {
    const audioName = `./audio_files_mp3/cut/new/How_to_Speak_(320 kbps)_${i}.mp3`;
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
    // const result = await main();
    const result = `hey world ${i}`;
    const filePath = `./result/new/How_to_Speak_(320 kbps)_${i}.txt`;

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
// const endTime = Date.now();

// // Calculate the time taken in milliseconds
// const timeTaken = endTime - startTime;

// // Convert milliseconds to seconds and minutes
// const seconds = Math.floor(timeTaken / 1000);
// const minutes = Math.floor(seconds / 60);
// const remainingSeconds = seconds % 60;

// // Display the time taken in both seconds and minutes format
// console.log(`Time taken: ${minutes} min ${remainingSeconds} seconds`);
// console.log(`Time taken in seconds: ${seconds} seconds`);
