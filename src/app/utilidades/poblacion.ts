import { EstadoRegion } from "../utilidades";
export class Poblacion {
    idPoblacion: number;
    nombre: string;
    estadoRegion?: EstadoRegion;

    constructor(){
        this.idPoblacion = 0;
        this.nombre = "";
        this.estadoRegion = new EstadoRegion();
    }

}
