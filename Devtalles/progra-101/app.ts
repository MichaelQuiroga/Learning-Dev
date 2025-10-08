function greet(name:string = 'Mundo'){ //Se puede definir un argumento por defecto en caso de que no se defina desde donde se invoque la funcion 
    console.log('Hola ' + name);    
}

function addTwoNumbers(num1:number, num2:number):number{
    return num1+num2;
}

let total:number = addTwoNumbers(20,30)
console.log('El total de la suma es '+ total);

// let firstName = 'Steven'

// greet(firstName);



