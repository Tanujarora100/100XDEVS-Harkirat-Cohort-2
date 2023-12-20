function addSum(a, b) {
    return a + b;
}

//We need to use an anonymous function when we are passing some argument functions in the setTimeOut

setTimeout(function () {
    const result = addSum(1, 2);
    console.log(result);
}, 2000);
console.log("hello")

//busy waiting or synchronous sleeping
function findSum(a) {
    for (let i = 0; i <= 1000000; i++)
        a++;
    return a;
}

let findSum1 = findSum(10);
console.log(findSum1);
console.log("hello world")