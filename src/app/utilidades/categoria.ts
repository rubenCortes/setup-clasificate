import { SubCategoria } from "../utilidades";
export class Categoria {
    idCategoria: number;
    nombre: string;
    subCategoriaList?: SubCategoria[];

    constructor(){
        this.idCategoria = 0;
        this.nombre = "";
    }
}
