fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((jsonData) => {
        console.log(jsonData);
    })
    .catch((error) => console.log(error))


