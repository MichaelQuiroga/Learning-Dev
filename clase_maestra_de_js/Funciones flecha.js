// function llamar(enExito,enError) {
//     let exito = false;

//     if (exito) {
//         enExito();
//     } else {
//         enError();
//     }
// }

// llamar(
//     ()=>{
//         console.log('Exito'); 
//     },
//     ()=>{
//         console.log('Error'); 
//     }
// )

// [1, 2, 3, 40].forEach((e, i) => {
//     console.log(e, i);     //"e" es el elemento de la lista y "i" es el indice de la lista en este caso
// })

[1, 2, 3, 40].forEach(
    console.log     //Cómo en el código anterior tanto los parametros de la función como lo que se imprime es lo mismo, solamente se usaría la función que ya trae un callback. Void significa que la función no tiene retorno
)

// Escenario A: función flecha definida directamente
const objA = {
  nombre: "objA",
  metodo: () => {
    console.log("A:", this);
  }
};

// Escenario B: función normal
const objB = {
  nombre: "objB",
  metodo: function () {
    console.log("B:", this);
  }
};

// Escenario C: función flecha definida dentro de una función normal
const objC = {
  nombre: "objC",
  metodo: function () {
    const flecha = () => {
      console.log("C:", this);
    };
    flecha();
  }
};

// Ejecuciones
objA.metodo(); // ¿Qué imprime?
objB.metodo(); // ¿Qué imprime?
objC.metodo(); // ¿Qué imprime?