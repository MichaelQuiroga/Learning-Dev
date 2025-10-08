let numero1 = 11;
let numero2 = 12;

console.log(numero1 == numero2);

numero2 = "11";
console.log (numero1 == numero2);
console.log (numero1 === numero2); //Compara el tipo de dato y el valor

let numero3 = 65;

console.log(numero1>numero2);
console.log(numero2<numero3);
console.log(numero1>=numero2);
console.log(numero1<=numero2);
console.log(numero1!=numero2);

//Comparación de texto

let a = 'a';
let b = 'b';

console.log(a>b);
console.log(b>a);

let A = 'A';
console.log(A > a) // En js las letras minusculas van primero que las mayusculas