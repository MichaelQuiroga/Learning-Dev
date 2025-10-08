// let i = 0;

// while (i<100) {
//     console.log(i);
//     i++;
// }

let lista = [1,2,3,4,5,6,7,8,9,12,21,32,423,3434,3454556,7564564,23423423423]
let numero = 0;

while (numero<500) {
    numero=lista.shift();
    console.log(numero);
}
console.log(lista);
