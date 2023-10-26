// async function f() {
//     return 1;
// }

// function f() {
//     return Promise.resolve(1);
// }

// console.log(f());

async function f() { 
    let promise = new Promise((resolve, reject) => { 
        setTimeout(() => reject("done!"), 1000) 
    }); 
        
    let result = await promise; 
    // wait until the promise resolves (*) 
    console.log(result); 
    // "done!" 
} 

f();