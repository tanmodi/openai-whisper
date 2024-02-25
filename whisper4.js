import { existsSync, mkdirSync, writeFile } from 'fs';

for (let i = 1; i <= 7; i++) {
    const result = "world" + i;
    const filePath = `./result/How_to_Speak_(320 kbps)/How_to_Speak_(320 kbps)_0${i}.txt`;

    if (!existsSync(filePath)) {
        // Create directory if it doesn't exist
        const directoryPath = `./result/How_to_Speak_(320 kbps)`;
        if (!existsSync(directoryPath)) {
            mkdirSync(directoryPath, { recursive: true });
            console.log("Directory created successfully.");
        }
        // Write to file
        
    } else {
        writeFile(filePath, result, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
                return;
            }
            console.log("String has been written to the file successfully.");
        });
        console.log("File already exists:", filePath);
    }
}
console.log("Done");
