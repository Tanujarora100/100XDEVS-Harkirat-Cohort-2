// const promiseOne = new Promise((resolve, reject) => {
//     //ASYNC TASKS
//     //NETWORK CALLS, DB CALLS.
//     setTimeout(function () {
//         console.log("ASYNC TASK IS COMPLETED")
//         resolve();
//     }, 1000);
// });
// promiseOne.then(() => {
//     console.log("PROMISE CONSUMED")
// });
// //Resolve ka connection hai .then ke saath
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("THIS IS AN EXAMPLE OF ASYNC TASK EXECUTED THROUGH PROMISES");
//     }, 10000);
//     resolve()
// }).then(() => {
//     console.log("PROMISE COMPLETED")
// })
//

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//
//     }, 1000);
//     resolve([{username: "tanuj"}, {username: "akshita"}])
// }).then((user) => {
//     console.log(JSON.stringify(user));
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         let promiseArray = [{username: "tanuj"}, {username: "akshita"}]
//         if (!error)
//             resolve(promiseArray)
//         else
//             reject("Exception Occurred")
//     }, 2000)
// }).then((userArray) => {
//     console.log(userArray)
//     return userArray[0].username
// }).then((adminUser) => {
//     console.log(adminUser);
// })
//     .catch((err) => {
//         console.log(err)
//     })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "Tanuj"})
        } else
            reject("Exception occurred");
    }, 1000)

})

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json();
//     try {
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
//
// }

