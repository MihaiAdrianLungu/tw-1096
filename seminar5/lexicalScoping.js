// global scope
const x = 10;

function parentFunction() {
    // local scope - parent
    let parentVariable = 2;

    function childFunction() {
        parentVariable = 3;
        // local scope - child
        console.log(parentVariable);
        console.log(x);
    }

    childFunction();
}

parentFunction();

