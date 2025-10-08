let usuario = {
    nombre: 'Ana',
    apellido: 'Pérez'
}

function cambiarApellido(object) {
    // let copia = JSON.parse(JSON.stringify(usuario));
    let copia = {...usuario}; // se hace la copia del objeto como en la línea anterior pero usando la sintaxis spread
    copia.apellido='Ochoa';
    return copia;
}


console.log(cambiarApellido(usuario));

console.log(usuario);


