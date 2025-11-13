//Se imortan las funciones, variables o clases que se exportaron en Export.js
//Esta es la primer forma de importar
// import {sumar, Pi, Servicio} from './Export.js';
// let resultado = sumar(20, 765);
// console.log(resultado);
// console.log(Pi);
// //se crea una instancia de la clase Servicio
// let Servicio1 = new Servicio();
// console.log(Servicio1.restarTres(Pi));

//Esta es la segunda forma de importar
// import cualquierNombre from './Export.js';
// //se crea una instancia de la clase Servicio alojada en Export.js
// console.log(new cualquierNombre().restarTres(10));

import * as todo from './Export.js';
console.log(todo.sumar(todo.Pi,7));




