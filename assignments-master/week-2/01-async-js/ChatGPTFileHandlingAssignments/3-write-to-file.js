const fs = require('fs')
const dataToWrite = '\nThis is a test not to replace the old text'

fs.appendFile("test.txt", dataToWrite, 'utf-8', (error) => {
    if (error) {
        console.error("ERROR WHILE WRITING");
        return;
    }
    else{
        console.log("WRITE OPERATION SUCCESSFUL");
    }
})