// se define un objeto animal con propiedades privadas _nombre y _edad
class Animal {
    constructor(_nombre, _edad) {
        this._nombre = _nombre;
        this._edad = _edad;
    }
    // se define un getter para obtener los datos del animal
    get datos() {
        return `Nombre: ${this._nombre}, Edad: ${this._edad}`;
    }
    // se define un setter para establecer los datos del animal
    set datos(valor) {
        let splitValor = valor.split(' ');
        this._nombre = splitValor[0];
        this._edad = splitValor[1];
    }
    //Se crea un método emitirSonido que imprime un mensaje en la consola
    emitirSonido() {
        return `El animal ${this._nombre} hace un sonido`;
    }

    static compararEdad(Animal1, Animal2){
        if (Animal1._edad > Animal2._edad) {
            return `${Animal1._nombre} es mayor que ${Animal2._nombre}`;
        }else if (Animal1._edad < Animal2._edad) {
            return `${Animal2._nombre} es mayor que ${Animal1._nombre}`;
        } else {
            return `${Animal1._nombre} y ${Animal2._nombre} tienen la misma edad`;
        }
    }

    static imprimirColores(Animal1, Animal2){
        return `${Animal1._nombre} es de color ${Animal1._color} y ${Animal2._nombre} es de color ${Animal2._color}`
    }
}

// se define una subclase perro que hereda de la clase animal
class Perro extends Animal {
    // se define un constructor que llama al constructor de la clase padre y establece la propiedad privada _raza
    constructor(_nombre, _edad, _raza) {
        super(_nombre, _edad);
        this._raza = _raza;
    }
    // se define un getter y un setter para la propiedad raza
    get raza() {
        return this._raza;
    }
    set raza(valor) {
        this._raza = valor
    }
    // se sobrescribe el método emitirSonido para que imprima un mensaje específico para perros
    emitirSonido() {
        return `${this._nombre} ladra : Guau Guau!!`;
    }
    // se crea un método jugar que imprime un mensaje en la consola
    jugar() {
        return (`El perro ${this._nombre} de raza ${this._raza} está jugando`);
    }
}
// se define una subclase gato que hereda de la clase animal
class Gato extends Animal {
    // se define un constructor que llama al constructor de la clase padre y establece la propiedad privada _color
    constructor(_nombre, _edad, _color) {
        super(_nombre, _edad);
        this._color = _color;
    }
    // se define un getter y un setter para la propiedad color  
    get color() {
        return this._color;
    }
    set color(valor) {
        this._color = valor;
    }
    // se sobrescribe el método emitirSonido para que imprima un mensaje específico para gatos
    emitirSonido() {
        return `${this._nombre} maulla: Miau Miau!!`;
    }
    // se crea un método ronronear que imprime un mensaje en la consola
    ronronear() {
        return `El gato ${this._nombre} de color ${this._color} está ronroneando grrrrrrr`;
    }
}
// se crea una función presentarAnimal que imprime los detalles del animal
function presentarAnimal() {
    console.log(`Este es ${this._nombre}, tiene ${this._edad} años.`);
}

let perro1 = new Perro('Rocky', 4, 'Pastor Alemán');
let gato1 = new Gato('Misu', 3, 'Negro');
let perro2 = new Perro('Otto', 4, 'Criollo Colombiano');
let gato2 = new Gato('Zeta', 3, "Blanco - Naranja");
//Se prueban métodos sobrescritos
console.log(perro1.emitirSonido());
console.log(gato1.emitirSonido());
//Se prueban métodos sobrescritos
console.log(perro2.jugar());
console.log(gato2.ronronear());
//Se prueban getter/setters
console.log(perro1.datos);
perro1.datos = 'Firu 6';
console.log(perro1.datos);
//Uso de call, apply y bind
presentarAnimal.call(perro1); //se llama el contexto de perro 1
presentarAnimal.apply(gato2); //Se llama el contexto gato 2 ** Si hubieran más argumentos se pasan en un array
let presentarPerro2 = presentarAnimal.bind(perro2); //Se crea otra función con el this fijo
presentarPerro2();
//Bonus Comparador de edades por medio de un método estático desde la clase Animal
console.log(Animal.compararEdad(perro1,perro2))
//Bonus Imprimir colores de los animales
console.log(Animal.imprimirColores(gato2, gato1))










