const firstName = "Tanuj"
const lastName = "Arora"
console.log("Hello" + " " + firstName + " " + lastName)


//Second Assignment
const gender = "M"
if (gender.toLowerCase() === "m")
    console.log("Hello Male")
else
    console.log("Hello Female")


//Third Question
for (let i = 0; i <= 100; i++) {
    console.log(i);
}

//Array
const personArray = ["Harkirat", "Tanuj"]
for (let i = 0; i < personArray.length; i++)
    console.log(personArray[i]);


//Object
const user1 = {
    firstName: "Ashley Look at me",
    gender: "Male"
}
console.log(user1["firstName"])

//Array of Objects
const allUsers = [
    {
        firstName: "Harkirat"
        , gender: "M"
    },
    {
        firstName: "Shivaani",
        gender: "F"
    }
    , {
        firstName: "Tanuj",
        gender: "M"
    }
]

for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].gender.toLowerCase() === 'm')
        console.log(allUsers[i].firstName + " ");
}


function calculateArithmetic(a, b, type) {
    if (type === 'sum') {
        return a + b;
    } else if (type === 'minus') {
        return Math.abs(a - b);
    }
}

let result = calculateArithmetic(1, 2, 'divide');
console.log(result);
