// se cren funciones , clases y constantes para exportar
export function sumar(a, b) {
    return a + b;
}

export const Pi = 3.1416;

export class Servicio{
    tres = 3;

    restarTres(num){
        return num - this.tres;
    }
}
// export por defecto la clase Servicio
export default Servicio;



