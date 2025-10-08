let edad = 18;
let accion = 'colocar';
let numero = 144;

if (edad >= 18) {
    console.log('El usuario es mayor de edad',':',edad);
} else {
    console.log('El usuario es menor de edad',':',edad);
};

switch (accion) {
    case 'crear':
        console.log('La acción a realizar es',  accion);
        break;
    case 'colocar':
        console.log('La acción a realizar es', accion);
        break;
    case 'actualizar':
        console.log('La acción a realizar es', accion);
        break;
    case 'borrar':
        console.log('La acción a realizar es', accion);
        break;
    default:
        console.log('No se realizará ninguna acción');
        break;
};

let validacionNumero = numero % 2 === 0 ? 'El numero es par' : 'El numero es impar'; 
console.log(validacionNumero,':', numero);
