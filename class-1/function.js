function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

function printNumbers(num1, num2, fnToCall) {
    let sum = addTwoNumbers(num1, num2);
    fnToCall(sum);
}

function printNumbersInPassiveTense(sum) {
    console.log("NUMBERS ARE ADDED HERE AND PRINTING THEM FOR YOU " + sum);
}

// Directly calling printNumbersInPassiveTense with the sum
printNumbersInPassiveTense(1 + 2);

// Callback example
const hello = () => {
    console.log("Arrow Function");
}

// Using printNumbers with a callback function
printNumbers(1, 2, printNumbersInPassiveTense);
