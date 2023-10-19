function increaseSalary(arr, procent) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error('Not an array');
        }

        if (typeof procent !== 'number') {
            throw new Error('Not a number');
        }

        const newArr = arr.map(el => el + (el * procent / 100));

        return newArr;
    } catch (error) {
        console.log(error.message);
    }
}

const arr = [2000, 3000, 4000];
const procent = 10;

const result = increaseSalary(arr, procent);
console.log(result);