class Padre {
    constructor(nombre, apellido, soy) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.soy = soy;
    }
    saludo() {
        console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
    }
}

class Hijo extends Padre {
    constructor(nombre, apellido, soy, tengo) {
        super(nombre, apellido, soy);
        this.tengo = tengo;
    }
    saludoHijo() {
        console.log(`Soy ${this.nombre} ${this.apellido}, soy ${this.soy} y tengo ${this.tengo}`);
    }
}

const padre = new Padre('Juan', 'Pérez', 'padre');
padre.saludo(); // Soy Juan Pérez y soy padre

const hijo1 = new Hijo('Carlos', padre.apellido, 'hijo', '10 años');
hijo1.saludoHijo(); // Soy Carlos Pérez, soy hijo y tengo 10 años