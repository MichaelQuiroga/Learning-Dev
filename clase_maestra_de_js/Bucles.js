for (let i = 0; i<10; i++){
    console.log(i);
    
}

let listaAnnimales = ['Perro', 'Gato', 'Bisonte','Aguila', 'Toro','Pisco']

for (i=0; i<listaAnnimales.length; i++){
    animal = listaAnnimales[i];
    if(animal==='Toro')
    {
        console.log(animal,'Es un animal con cuernos'); 
    }else{
        console.log(animal,'Es un animal sin cuernos');
    }
}