function Animal(nombre) {
   this.nombre = nombre;
}

// creo un método para Animal
Animal.prototype.obtenerNombre = function() {
    return this.nombre;
}

function Mamifero(nombre, tienePelo) {
    // hereda la propiedad nombre de Animal
    Animal.call(this, nombre);
    this.tienePelo = tienePelo;
}
// hereda los métodos de Animal
Mamifero.prototype = Object.create(Animal.prototype);

// creo un método para Mamifero
Mamifero.prototype.obtenerTienePelo = function() {
    return this.tienePelo;
}

function Perro(nombre, raza) {
    // hereda la propiedad nombre de Mamīfero
    Mamifero.call(this, nombre, true);
    this.raza = raza;
}

// hereda los métodos de Mamifero
Perro.prototype = Object.create(Mamifero.prototype);

// creo un método para Perro
Perro.prototype.obtenerRaza = function() {
    return this.raza;
}

var firulais = new Perro('Firulais', 'Labrador');

console.log(firulais.obtenerNombre());  // 'Firulais'
console.log(firulais.obtenerTienePelo()); // true
console.log(firulais.obtenerRaza()); // 'Labrador'