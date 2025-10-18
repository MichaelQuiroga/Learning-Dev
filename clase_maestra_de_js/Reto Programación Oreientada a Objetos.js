// //1. Refuerza tus conocimientos de POO creando un sistema de Vehículos.
//       1. Crea una clase Vehículo que incluya un constructor que establezca el número de ruedas y un método para mostrar detalles generales del vehículo. 
//       2. Crea dos subclases de Vehículos cualesquiera que hereden de Vehículo e incluyan un constructor con atributos específicos, como la capacidad de pasajeros, y un método para mostrar detalles personalizados.
//       3. Crea una instancia de cada Vehículo y muestra sus detalles en la consola. 🚗🚲
// 2. Intenta escribir el código de JavaScript que ves en la terminal. No tiene que ser perfecto! 🧑‍💻 
// 3. Compara tu solución con la solución incluida en los archivos descargables al inicio del curso y descubre que partes pudiste hacer de mejor manera. No te preocupes si encuentras métodos que no conocías, ya las conocerás! 🙌 Buenas habilidades! 🔥

// Clase base Vehículo
class Vehiculo {
    constructor(ruedas) {
        this.ruedas = ruedas;
    }

    detallesGenerales() {
        return `Este vehículo tiene ${this.ruedas} ruedas.`;
    }
}

class coche1 extends Vehiculo {
    constructor(ruedas, capacidadPasajeros) {
        super(ruedas);
        this.capacidadPasajeros = capacidadPasajeros;
    }
    detallesPersonalizados() {
        return `Este coche tiene ${this.ruedas} ruedas y una capacidad de ${this.capacidadPasajeros} pasajeros.`;
    }
}

class bicicleta1 extends Vehiculo {
    constructor(ruedas, tipo) {
        super(ruedas);
        this.tipo = tipo;
    }
    detallesPersonalizados() {
        return `Esta bicicleta tiene ${this.ruedas} ruedas y es de tipo ${this.tipo}.`;
    }
}

let micoche = new coche1(4, 5);
console.log(micoche.detallesGenerales());
console.log(micoche.detallesPersonalizados());

let miBicicleta = new bicicleta1(2, 'montaña');
console.log(miBicicleta.detallesGenerales());
console.log(miBicicleta.detallesPersonalizados());