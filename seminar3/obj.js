const obj = {
    firstName: 'Joe',
    yearsOld: 24,
    logYearsOld: function() {
        console.log(this.yearsOld);
    }
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));