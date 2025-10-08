let mensaje = "¡Hola Mundo!";
let nombre = "Juan";

console.log(mensaje,"soy",nombre);
console.log("Mi nombre en mayúsculas es:", nombre.toUpperCase());
console.log("Mi nombre en minúscula es:", nombre.toLocaleLowerCase());
console.log("El mensaje de",mensaje,"tiene",mensaje.length,"caracteres");

let arreglo = [1,2,3,4,5];
console.log("El tercer número del array con los valores", arreglo, "es:", arreglo[2]); 
arreglo.push(6);
console.log("Se añade el número que sigue en orden al final del arreglo y es:", arreglo[5]);

let frase = "La lluvia en sevilla es una maravilla";
console.log("Se encontró el patrón 'lluvia' en el texto", frase, ", por lo que el resultado es:", frase.includes("lluvia"))