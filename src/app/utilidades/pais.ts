import { EstadoRegion } from "../utilidades";
export class Pais {
    idPais: number;
    nombre: string;
    estadoRegionList?: EstadoRegion[];

    constructor(){
        this.idPais = 0;
        this.nombre = "";
    }
}
