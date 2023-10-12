function calculate(arr, factor) {
    const filteredArr = arr.filter(el => el % factor === 0);

    return filteredArr.reduce((acc, el) => acc + el);
}

console.log(calculate([1,2,3,4], 3));