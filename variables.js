function showVariables() {
    if(true) {
        var x = 1;
        let y = 2;
        const z = 3;

        console.log('X: ' + x);
        console.log('Y: ' + y);
        console.log('Z: ' + z);
    }

    console.log('X: ' + x);
    // console.log('Y: ' + y);
    // console.log('Z: ' + z);
}

console.log('X: ' + x);

showVariables();