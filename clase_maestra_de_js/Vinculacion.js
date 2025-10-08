function info(a,b){
    console.log(this,a,b)
}

let auto ={
    modelo: 'Toyota',
    año: 2020,
    marca: 'Corolla',
}
//bind, call, apply son métodos de una función que permiten cambiar el contexto de ejecución de una función
info.bind(auto)() //bind retorna una nueva función con el contexto cambiado
info.call(auto, 10) //call ejecuta la función con el contexto del objeto pasado como argumento, además la diferencia con bind es que call ejecuta la función inmediatamente sin necesidad de los paréntesis al final. También le podemos pasar argumentos adicionales separados por comas.
info.apply(auto, [20, 30, 40]) //apply es similar a call, pero en lugar de pasar argumentos adicionales separados por comas, se pasan en un array.