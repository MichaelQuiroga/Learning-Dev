let objeto = { 
    "Número uno": 1, 
    "2 en texto": "Dos", 
    "Lista de los 5 primeros números pares": [0, 2, 4, 6, 8],
    "Boleano": true,
    "Otro objeto": {
        "Primer nombre": "Michael",
        "Primer apellido": "Quiroga"
    }
};
console.log(objeto["Otro objeto"]);
console.log(objeto.Boleano);
console.log(objeto["Otro objeto"]["Primer apellido"]);
delete objeto['Boleano'];
console.log (objeto)

let toyota = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    color: 'Rojo',
}

let ford = {
    marca: 'Ford',
    modelo: 'Mustang',
    año: 2021,
    color: 'Azul',
}