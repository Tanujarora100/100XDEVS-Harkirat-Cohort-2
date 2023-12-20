let counter = 1;

function updateCount() {
    console.log(counter);
    ++counter;
}

//Calling this method every 1 second to create a counter
setInterval(updateCount, 1000);