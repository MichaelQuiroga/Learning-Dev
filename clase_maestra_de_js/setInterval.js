let i = 0;

let intervalo =
    //El setInterval es una función que no es propia de JavaScript, es una web API y sirve para ejecutar una función repetidamente cada cierto tiempo. Este tiempo se mide en milisengundos.
    setInterval(() => {
        console.log(i++);
    }, 2000);
//El clearInterval sirve para detener la ejecución repetida del setInterval.


setTimeout(() => {
    clearInterval(intervalo); //Detenemos el setInterval.
}, 10000); //Con este setTimeout detenemos el setInterval después de 10 segundos.