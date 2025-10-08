export let grade: number = 60;
let gradeLetter:string;

if (grade >= 90) {
    gradeLetter = 'A';
} else if (grade >= 80) {
    gradeLetter = 'B';
}
else if (grade >= 70) {
    gradeLetter = 'C';
}
else if (grade >= 60) {
    gradeLetter = 'D';
} else {
    gradeLetter = 'F';
}

console.log('La nota del alumno es ', gradeLetter);


