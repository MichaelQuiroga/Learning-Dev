// Crea una función constructora de objetos llamada "Auto" que permita crear nuevos objetos con las propiedades: modelo, marca y año. Luego, crea dos instancias de objetos "Auto" con diferentes valores para sus propiedades y las muestra por consola.
function Auto(modelo, marca, año) {
    this.modelo = modelo;
    this.marca = marca;
    this.año = año
}

console.log(new Auto('Jesko', 'Koenigsegg', 2021));
console.log(new Auto('Aventador', 'Lamborghini', 2020));

