//No se declaran las variables globales ya que solo se utulizan en la función
function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit
}

console.log(`80° son ${convertirCelsiusAFahrenheit(80)}°F`);
console.log(`60° son ${convertirCelsiusAFahrenheit(60)}°F`);
console.log(`10° son ${convertirCelsiusAFahrenheit(10)}°F`);