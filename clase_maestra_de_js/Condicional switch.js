let usuario = 'Pedro';

switch (usuario) {
    case 'Pedro':
        console.log('Acceso de usuario autorizado')
        break;

    case 'Mike':
        console.log('Acceso de admin autorizado')
        break;

    default:
        console.log("Acceso NO autorizado")
        break;
}