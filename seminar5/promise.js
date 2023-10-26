const promise = new Promise((resolve, reject) => {
    reject('test');
})

promise
    .then(msg => console.log(msg))
    .catch(msg => console.log(msg))