let persona = {
    _nombre : 'Duván',
    _edad : 23,

    get datos() {
        return this._nombre + ' ' + this._edad;
    },
    set datos(valor) {
        let splitValor = valor.split(' ');
        this._nombre = splitValor[0];
        this._edad = splitValor[1];
    }
};

persona.datos = 'Michael 27';
console.log(persona.datos);
