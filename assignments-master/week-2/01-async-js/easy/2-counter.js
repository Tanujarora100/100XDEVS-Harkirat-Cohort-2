let count = 1;

function incrementCount() {
    console.log(count)
    ++count;
    setTimeout(incrementCount, 1000);
}

incrementCount();