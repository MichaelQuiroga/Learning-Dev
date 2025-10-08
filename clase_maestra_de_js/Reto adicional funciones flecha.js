//  Instrucciones:
// Crea una función flecha que reciba dos parámetros: precio y descuento.

// Si el precio o el descuento no son válidos (ej: null, undefined o negativos), imprime:
// "Datos inválidos, por favor verifica los valores."

// Si los datos son válidos, calcula el precio final aplicando el descuento y muestra en consola:
// "El precio final con descuento es: X"


const calcularDescuento = (precio, descuento) => {
    if (precio >= 0 && descuento >= 0) {
        let precioFinal = precio - (precio * descuento / 100);
        console.log(`El valor final con descuento es: ${precioFinal.toFixed(2)}`); // El toFixed es un método que muestra sólo dos decimales
    } else {
        console.log('Datos inválidos, por favor verifica los valores');
    }
};

calcularDescuento(10500, 20)