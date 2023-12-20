const fs = require('fs');

fs.readFile("Students.json", "utf-8", (error, data) => {
    if (error) {
        console.log("Error occurred");
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        if (jsonData.students && Array.isArray(jsonData.students)) {
            jsonData.students.forEach(
                (student) => {
                    console.log(`Student Name is ${student.name} and Roll Number is ${student.id}`)
                }
            );
        }
        //Calculate Number of Subjects taught by the teacher.
        let subjectSet = new Set();
        if (jsonData.teachers && Array.isArray(jsonData.teachers)) {
            jsonData.teachers.forEach(
                (teacher) => {
                    subjectSet.add(teacher.subject);
                }
            )
            console.log(subjectSet.size);
        }
    } catch (error) {
        console.error(error);
    }
});

// This loop simulates some synchronous operation
let cnt = 0;
for (let i = 0; i < 100000; i++) {
    ++cnt;
}

// This log will be executed after the asynchronous file reading operation
console.log(`Synchronous operation completed. Count: ${cnt}`);
