//Declaración
function sumar(a,b) {
    let resultadoSuma = a + b;
    return resultadoSuma
}

//Expresión

const suma2 = function(a,b){
    let resultadoSuma2 = a + b;
    return resultadoSuma2
}

console.log(sumar(5,7));
console.log(suma2(4,9));


//La diferencia entre declaración y expresión es que JS por defecto le da prioridad a las funciones al momento de correr un programa, en cambio las expresiones se mantienen en cascada, si se mueven los console.log y quedan antes de la expresión nos arrojará un error, en cambio la función sea dónde sea que esté siempre funcionará.