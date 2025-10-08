// En Emacscript 6 (ES6), se introdujo una sintaxis más sencilla y clara para crear clases utilizando la palabra clave `class`. A continuación, se muestra cómo se puede reescribir el ejemplo de prototype utilizando esta nueva sintaxis de clases.

class Auto {
    constructor(modelo, marca, año) {
        this.modelo = modelo;
        this.marca = marca;
        this.año = año;
    }

// Método agregado al prototipo de la clase
    info = function () {
            return `Modelo: ${this.modelo}, Marca: ${this.marca}, Año: ${this.año}`;
        }
}

    const auto1 = new Auto('Jesko', 'Koenigsegg', 2021);
    const auto2 = new Auto('Aventador', 'Lamborghini', 2020);
    const auto3 = new Auto('Chiron', 'Bugatti', 2019);

console.log(auto1.info());
console.log(auto2.info());
console.log(auto3.info());


