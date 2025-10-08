// function sumar() {
//     return 5 + 7;
// }

// console.log(sumar());
// console.log(sumar());
// console.log(sumar());

//---------------------------


// let numeroInicial = 3;

// function sumarCuatro() {
//     numeroInicial+=4;
//     return numeroInicial;
// }
// console.log(sumarCuatro());
// console.log(sumarCuatro());
// console.log(sumarCuatro());


//---------------------------


// function sumar(a,b) {
//     return a+b;
// }

// console.log(sumar(76,42));
// console.log(sumar(15,45));
// console.log(sumar(3,7));

//---------------------------

function sumar() {
    let suma = 0;
    for (let numero of arguments) {
        suma += numero;
    }
    return suma;
}
console.log(sumar(1,4,8,6,5,9,0));
