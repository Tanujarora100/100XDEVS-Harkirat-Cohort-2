const fs = require("fs");

fs.readFile('hello.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("ERROR WHILE READING THE FILE");
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        console.log('Employees', jsonData.employees.length);
        console.log('Employee Names are:');
        jsonData.employees.forEach(emp => {
            console.log(`${emp.name}`);
        });
    } catch (parseError) {
        console.error('Error parsing JSON', parseError);
    }
});
