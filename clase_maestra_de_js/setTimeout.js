
console.log('Mensaje antes');
//El setTimeout es una función que no es propia de JavaScript, es una web API y sirve para ejecutar una función después de cierto tiempo. Este tiempo se mide en milisengundos.
let retardador = setTimeout(() => {
    console.log("Esto se muestra después de 2 segundos");
},2000);

clearTimeout(retardador); //Con esta función podemos cancelar el setTimeout antes de que se ejecute, no se detiene el tiempo sino que no se ejecuta la función.

console.log('Mensaje después');

