// se crea una clase vehiculo con su constructor, getters, setters y un método describir
class Vehiculo{
    constructor(marca, modelo,_año){
        this._marca = marca;
        this._modelo = modelo;
        this._año = _año;}
    get datos(){
        return `${this._marca} ${this._modelos} ${this._año}`;
    }
    set datos(valor){
        let splitValor = valor.split(' ');
        this._marca = splitValor[0];
        this._modelo = splitValor[1];
        this._año = splitValor[2];
    }
    describir(){
        return `El vehículo es marca ${this._marca}, modelo ${this._modelo} y año ${this._año}`;
    }
    static compararAños(Vehiculo1, Vehiculo2){
        if (Vehiculo1._año > Vehiculo2._año) {
            return `${Vehiculo1._modelo} es más nuevo que ${Vehiculo2._modelo}`;
        }else if (Vehiculo1._año < Vehiculo2._año) {
            return `${Vehiculo2._modelo} es más nuevo que ${Vehiculo1._modelo}`;
        } else {
            return `${Vehiculo1._modelo} y ${Vehiculo2._modelo} son del mismo año`;
        }
    }
    static mostrarTipos(auto, moto){
        return `El auto usa ${auto._tipoCombustible} y la moto tiene un cilindraje de ${moto._cilindraje}`;
    }
}

class Auto extends Vehiculo{
    constructor(_marca, _modelo, _año, _tipoCombustible){
        super(_marca,_modelo,_año);
        this._tipoCombustible = _tipoCombustible;
    }
    get datos(){
        return `${this._tipoCombustible}`;
    }
    set datos(valor){
        this._tipoCombustible = valor;
    }
    describir(){
        return `El vehículo es marca ${this._marca}, modelo ${this._modelo}, año ${this._año} y tipo de combustible ${this._tipoCombustible}`;
    }
    tocarBocina(){
        return `El ${this._modelo} hace Beep Beep!`;
    }
}

class Moto extends Vehiculo{
    constructor(_marca, _modelo, _año, _cilindraje){
        super(_marca,_modelo,_año);
        this._cilindraje = _cilindraje;
    }
    get datos(){
        return `${this._cilindraje}`;
    }
    set datos(valor){
        this._cilindraje = valor;
    }
    describir(){
        return `El vehículo es marca ${this._marca}, modelo ${this._modelo}, año ${this._año} y cilindraje ${this._cilindraje}`;
    }
    hacerCaballito(){
        return `La moto ${this._modelo} está haciendo un caballito!`;
    }
}

function presentarVehiculo() {
    return `Este vehículo es un ${this._marca} del año ${this._año}`;
}
// let vehiculo1 = new Vehiculo ('BMW', 'X5', 2025);
// console.log(vehiculo1.describir());

// let auto1 = new Auto ('Cupra', 'Formentor', 2024, 'Gasolina Extra');
// console.log(auto1.describir());
// console.log(auto1.tocarBocina());

// let moto1 = new Moto ('CFMOTO', 'MT 650', 2023, '650cc');
// console.log(moto1.describir());
// console.log(moto1.hacerCaballito());

let moto1 = new Moto ('Yamaha', 'YZF R3', 2022, '321cc');
let moto2 = new Moto ('Kawasaki', 'Ninja 400', 2023, '399cc');
let auto1 = new Auto ('Toyota', 'Corolla', 2020, 'Gasolina Regular');

console.log(Vehiculo.compararAños(moto1, moto2));
console.log(Vehiculo.mostrarTipos(auto1, moto2));
console.log(presentarVehiculo.call(auto1));
console.log(presentarVehiculo.apply(moto1));
presentarMoto2 = presentarVehiculo.bind(moto2);
console.log(presentarMoto2());










