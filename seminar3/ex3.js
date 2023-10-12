const students = [ 
    { name: "Alice", scores: [90, 85, 92] }, 
    { name: "Bob", scores: [75, 80, 85] }, 
    { name: "Charlie", scores: [90, 95, 85] }, 
    { name: "David", scores: [100, 100, 100] } 
];

let mappedStudents = students.map(student => {
    const scoresSum = student.scores.reduce((acc, el) => acc + el, 0);

    return {
        name: student.name,
        average: scoresSum / student.scores.length
    }
}).filter(student => student.average >= 90);

console.log(mappedStudents);