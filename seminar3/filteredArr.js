const arr = [1,2,3,4];

const filteredArr = arr.filter(el => el > 2);

arr.filter(el => {
    if (el > 2) {
        return true;
    } else {
        return false;
    }
})

console.log(arr);
console.log(filteredArr);