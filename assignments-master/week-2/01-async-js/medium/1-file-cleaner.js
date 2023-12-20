const fs = require('fs');

// File paths
const inputFilePath = 'incorrectformat.txt';

// Read the file
fs.readFile(inputFilePath, 'utf-8', (readError, data) => {
    if (readError) {
        console.error('Error reading the file:', readError);
        return;
    }

    const cleanedContent = data.replace(/\s+/g, ' ') + '\n';

    fs.writeFile('name.txt', cleanedContent, 'utf-8', (writeError) => {
        if (writeError) {
            console.error('Error writing to the new file:', writeError);
        } else {
            console.log('Spaces have been cleaned. Cleaned content saved to the new file.');
        }
    });
});
