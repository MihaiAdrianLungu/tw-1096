function testNumbers(a,b) {
    try {
        if (a < b) {
            throw new Error('Error msg')
        }

        return a / b;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('Finished the execution');
    }
}

const result1 = testNumbers(2,1);
console.log(result1);