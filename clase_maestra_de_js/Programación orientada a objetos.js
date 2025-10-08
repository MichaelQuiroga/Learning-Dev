//se crea un objeto auto 1 con propiedades modelo, marca y año

let auto1={
    modelo: 'Jesko',
    marca: 'Koenigsegg',
    año: 2021,
};

//se crea un objeto auto 2 con propiedades modelo, marca y año

let auto2={
    modelo: 'Aventador',
    marca: 'Lamborghini',
    año: 2020,
};

//se crea un objeto servicio con una propiedad nombre y un método transformar que recibe un objeto auto como parámetro y transforma la propiedad modelo del auto a mayúsculas

let servicio={
    nombre: 'Transforma modelos de minúsculas a mayúsculas',
    transformar: function(auto){
        auto.modelo = auto.modelo.toUpperCase();
    }
};

//se llama al método transformar del objeto servicio pasando como argumento el objeto auto1 y se imprime el objeto auto1 para ver el cambio en la propiedad modelo
servicio.transformar(auto2);
console.log(auto2); 