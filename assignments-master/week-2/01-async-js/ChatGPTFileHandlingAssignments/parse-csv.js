const {parse} = require("csv-parse")
const fs = require('fs')

const filePath = 'input.csv'
fs.createReadStream(filePath)
    .pipe(parse({delimiter: " ", from_line: 1}))
    .on("data", function (row) {
        // executed for each row of data
        console.log(row);
    })
    .on("error", (error) => {
        console.log(error);
    })
    .on("end", () => {
        console.log("FILE READING DONE");
    });
