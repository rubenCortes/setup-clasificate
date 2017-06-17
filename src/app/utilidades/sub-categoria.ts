import { Categoria } from "../utilidades";
export class SubCategoria {
    idSubCategoria: number;
    nombre: string;
    categoria?: Categoria;

    constructor(){
        this.idSubCategoria = 0;
        this.nombre = "";
        this.categoria = new Categoria();
    }

}