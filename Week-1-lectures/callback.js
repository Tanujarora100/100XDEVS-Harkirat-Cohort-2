function square(n) {
    return n * n;
}

function calculateSum(a, b, fn) {
    console.log(fn)
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

function cubes(n) {
    return n * n * n;
}

//callback

let calculateSum1 = calculateSum(3, 3, cubes);
console.log(calculateSum1)