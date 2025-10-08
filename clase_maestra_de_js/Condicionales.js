let admin = "Mike"
let usuario = admin;

if (usuario === "Andrés") {
    console.log("Acceso autorizado!")
}
else if (usuario === "Mike") {
    console.log("Acceso autorizado como admin!")
}
else {
    console.log("Usuario no encontrado")
}