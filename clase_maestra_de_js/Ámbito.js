var numero = 4;

function ejemplo() {
    var numero=10;    //Se recomienda declarar las variables dentro de las funciones ya que eso permite que cuando usemos una variable en varias partes del código no genere errores.
    console.log(numero);
}
ejemplo();
console.log(numero);

// Var trabaja en un ámbito de función y let en un ámbito de bloque, por lo que hay que tener cuidado en cómo se declaran esas variables (Scope)

let numero1 = 2;

{
    var numero3 = 10;
    let numero1 = 5;
    console.log(numero1);
    
}

console.log(numero1);
