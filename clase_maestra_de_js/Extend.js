function padre(nombre, apellido, soy){
    this.nombre = nombre;
    this.apellido = apellido;
    this.soy = soy; 

    saludo(){
        console.log(`Soy ${this.nombre} ${this.apellido} y soy ${this.soy}`);
        
    }
}