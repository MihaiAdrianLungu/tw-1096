const birthYears = [1990, 2000, 1985, 1995, 2005, 2010];

let year = new Date().getFullYear();

const yearsOld = birthYears.map(el => {
    return year - el;
}).filter(year => year >= 18);

console.log(yearsOld)