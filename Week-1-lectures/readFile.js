const fs = require("fs")
fs.readFile("hello.txt", "utf-8", function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})
//This fs.readFile is an async Function in nature.

console.log("Hi  There to check async function")