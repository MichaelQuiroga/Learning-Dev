const formulario = {
    nombre: 'Michael Quiroga',
    email: 'mail@mail.com',
    mensaje: 'Mensaje de contacto'
};

const validarFormulario = (formContacto) => { return formContacto.nombre && formContacto.email && formContacto.mensaje }; //El formContacto funciona como una copia del objeto 'formulario'

const enviarFormulario = (formContacto) => {
    if (validarFormulario(formContacto)) {
        console.log('Formulario enviado con éxito!');
        
    } else {
        console.log('Datos incompletos en el formulario');
        
    }
};

enviarFormulario(formulario)





