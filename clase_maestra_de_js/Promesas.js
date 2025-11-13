
// Se define una promesa que inicialmente es un objeto

let promesa = new Promise((reciboDatos, noReciboDatos) => {
    setTimeout(() => {
        reciboDatos('Datos enviados por el usuario')
        //noReciboDatos('Se perdieron los datos enviados por el usuario');
    }
        , 5000);
});
promesa
    .then(texto => texto.toUpperCase())
    .then(texto => texto + '!!!')
    .then(texto => console.log(texto))
    .catch(problema => console.log('Error: ' + problema))
    .finally(() => console.log('Todo listo'))

console.log('Esto se puede seguir ejecutando asi no se cumpla la promesa');

