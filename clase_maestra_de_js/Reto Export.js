export function validarCorreo(Correo) {
    let validacion = Correo.includes('@') && Correo.includes('.');
    return validacion;  
}
