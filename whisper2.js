import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});




async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream("./audio_files_mp3/Integration_by_completing_the_square_MIT_18.01SC_Single_Variable_Calculus,Fall_2010(320_kbps).mp3"),
    model: "whisper-1",
  });

  console.log(transcription.text);
  return transcription.text;
}
const result = await main();
// const result = "hello";
const filePath = './result/whisper2.txt';

if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
    console.log('Directory created successfully.');
}
fs.writeFile(filePath, result, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('String has been written to the file successfully.');
  });
