import { Poblacion, Pais } from "../utilidades";
export class EstadoRegion {
    idEstadoRegion: number;
    nombre: string;
    pais?: Pais;
    poblacionList?: Poblacion[];

    constructor(){
        this.idEstadoRegion = 0;
        this.nombre = "";
        this.pais = new Pais();
    }
}
