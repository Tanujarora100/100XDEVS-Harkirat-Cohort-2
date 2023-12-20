const fs = require('fs');

fs.readFile("Students.json", 'utf-8', (error, data) => {
    if (error) {
        console.log("ERROR WHILE READING");
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        if (jsonData.students && Array.isArray(jsonData.students)) {
            jsonData.students.forEach((student) => {
                console.log(student);
            });
        }
    } catch (error) {
        console.error(error);
    }
});
