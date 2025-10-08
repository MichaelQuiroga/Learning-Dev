let traductor = {
    bucle:'loop',
    lista:'Array',
    declaracion:'declaration',
    objeto:'object'
}

//Este for se utiliza más que todo en objetos ya que sus elementos no suelen estar ordenados.
for (let palabra in traductor){
    console.log(palabra,'en inglés es -->', traductor[palabra]);
    
}