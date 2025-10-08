function Auto(modelo, marca, año) {
    this.modelo = modelo;
    this.marca = marca;
    this.año = año
}

Auto.prototype.info = function() {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Año: ${this.año}`;
}

const auto1 = new Auto('Jesko', 'Koenigsegg', 2021);
const auto2 = new Auto('Aventador', 'Lamborghini', 2020);

console.log(auto1.info());
console.log(auto2.info());