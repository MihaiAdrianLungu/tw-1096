function processString(input){
    if (input.length === 0) {
        return 100;
    }

    const numbers = input.split(' ');
    let testResult = true;

    for(number of numbers) {
        if(isNaN(number)) {
            testResult = false;
        }
    }

    if(!testResult) {
        throw new Error('Item is not a number')
    }

    const evenNumbersSum = numbers.filter(el => el % 2 === 0).reduce((acc, el) => acc + Number(el), 0);

    return 100 - evenNumbersSum;
}

const app = {
    processString: processString
}

module.exports = app