// Este reto consiste en crear un constructor de objetos llamado "Persona" que acepte un parámetro "nombre". Luego, agrega un método al prototipo de "Persona" llamado "saludar" que devuelva un saludo personalizado utilizando el nombre de la persona. Crea tres instancias de "Persona" con diferentes nombres y llama al método "saludar" en cada una de ellas, mostrando el resultado por consola.

// function Persona(nombre) {
// 	this.nombre = nombre;
// }

// Persona.prototype.saludar = function () {
//     return ('Hola, mi nombre es ' + this.nombre);
// }

// const persona1 = new Persona('Juan');
// const persona2 = new Persona('María');
// const persona3 = new Persona('Luis');

// console.log(persona1.saludar());
// console.log(persona3.saludar());

//----------------------------------------------------------------


// En este reto se crea una clase llamada "Canal" que tenga las propiedades "canal", "tipo", "espectadores" y "url". Además, se agrega un método llamado "ir" que imprima la URL del canal en la consola. Luego, se crea una instancia de la clase "Canal" con valores específicos y se llama al método "ir" para mostrar la URL en la consola.

class Canal{
    constructor(canal, tipo, espectadores, url){
        this.canal = canal;
        this.tipo = tipo;
        this.espectadores = espectadores;
        this.url = url;
    }
    ir(){
        console.log(this.url);
    }
}

const canal = new Canal ('RollingStone', 'Music', 1432, 'https://www.twitch.tv/rollingstone');
canal.ir();