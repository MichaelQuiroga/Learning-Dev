let auto = {
    modelo: 'Modelo 3',
    año: '2021',
    marca: 'Tesla',
    info: info
};

function info() {
    return 'Este es un auto ' + this.marca + ' ,' + this.modelo + ' del año ' + this.año;
}

console.log(auto.marca);
console.log(auto.info());
