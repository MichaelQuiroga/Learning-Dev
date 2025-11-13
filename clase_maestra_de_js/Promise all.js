let promesa1 = new Promise((reciboDatos, noReciboDatos)=>{
    setTimeout(()=>{reciboDatos('Datos 1');},5000);
});

let promesa2 = new Promise((reciboDatos, noReciboDatos)=>{
    setTimeout(()=>{reciboDatos('Datos 2');},2000);
});

Promise.all([promesa1, promesa2])
    // .then((lista) => {
    //     console.log(lista);
    // });
    .then(([resultado1, resultado2])=>{
        console.log(resultado1);
        return resultado2;
    })
    .then(resultado2=>{
        console.log(resultado2.toUpperCase());
    })
