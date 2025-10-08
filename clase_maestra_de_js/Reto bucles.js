let numero = 1;

for (numero; numero <= 5; numero++){
    console.log(numero)
}

console.log('--------------------------------');


let listaColores = ['rojo','verde','azul','amarillo']
i = 0;

while (i<listaColores.length) {
    console.log(listaColores[i]);
    i++;
}

console.log('--------------------------------');

let persona = {
    nombre:'María',
    edad:27,
    profesion:'diseñadora'
}

for (let element in persona) {
    console.log(element,':',persona[element]);
}

console.log('--------------------------------');

let cuadrado = 0;
while (cuadrado*cuadrado<100) {
    cuadrado++
}
console.log('El numero mas cercano a 100 cuyo cuadrado en menor que 100 es:', cuadrado);

console.log('--------------------------------');

let par = 2;

do {
    console.log(par);
    par+=2; 
} while (par<10){
    console.log(par);
};
