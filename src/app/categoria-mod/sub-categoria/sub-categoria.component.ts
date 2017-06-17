import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";
import { Observer } from 'rxjs/Observer';

import { ModeloLista, Categoria, SubCategoria  } from "../../utilidades";
import { DialogoEntradaComponent, DialogoConfirmacionComponent } from "../../utilidades";
import { DatosCategoriaService, DatosSubCategoriaService } from "../../utilidades";

@Component({
  selector: 'app-sub-categoria',
  templateUrl: './sub-categoria.component.html',
  styleUrls: ['./sub-categoria.component.css']
})
export class SubCategoriaComponent implements OnInit {

  private idCategoriaSeleccionada: number;
  private categoriaSeleccionada: ModeloLista;

  private subCategoriaSeleccionada: ModeloLista;
  private categorias: ModeloLista[] = [];
  private subCategorias: ModeloLista[] = [];
  private mensajeError: string;

  constructor(public dialog: MdDialog, 
              public DatosCategoriaService: DatosCategoriaService, 
              public DatosSubCategoriaService: DatosSubCategoriaService) { }

//clavenet_personal@clavenet.banvenez.com 


  private abrirDialogo(nuevo: boolean, paisSeleccionado?: ModeloLista){
    let dialogRef: MdDialogRef<DialogoEntradaComponent>;
    
    if (nuevo){
      dialogRef = this.dialog.open(DialogoEntradaComponent,{ data: {id: 0, nombre: ""} } );
      dialogRef.afterClosed().subscribe( (salida:ModeloLista) => {this.agregarSubCategoria( salida );} );
    }else{
      dialogRef = this.dialog.open(DialogoEntradaComponent,{data: paisSeleccionado});
      dialogRef.afterClosed().subscribe( (salida:ModeloLista) => {this.editarSubCategoria( salida );} );
    }
  }

    public abrirDialogoConfirmacion(mensaje: string, id: number) {
  
    let dialogRef: MdDialogRef<DialogoConfirmacionComponent>;
    dialogRef = this.dialog.open(DialogoConfirmacionComponent, {data: mensaje});
    dialogRef.afterClosed().subscribe(salida => {this.borrarSubCategoria(id, salida);});   
  }

  private agregarSubCategoria(entrada: ModeloLista): void {
    let observador: Observer<SubCategoria> = {
      next: dato => this.actualizarListaSubCategorias(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (entrada) {
      let nuevaSubCategoria: SubCategoria = new SubCategoria(); //{idPais: 0, nombre: entrada.nombre.toUpperCase()};
      nuevaSubCategoria.idSubCategoria = null;
      nuevaSubCategoria.nombre = entrada.nombre.toUpperCase();
      nuevaSubCategoria.categoria.idCategoria = this.categoriaSeleccionada.id;
      nuevaSubCategoria.categoria.nombre = this.categoriaSeleccionada.nombre;

      //let estado: EstadoRegion = {idEstadoRegion: 0, nombre: entrada.nombre.toUpperCase(), pais:{idPais: this.idPaisSeleccionado, nombre: this.paisSeleccionado.nombre}};
      this.DatosSubCategoriaService.agregarSubCategoria(nuevaSubCategoria).subscribe(observador);      
    }
  }

  private editarSubCategoria(entrada: ModeloLista): void {
      let observador: Observer<SubCategoria> = {
      next: dato => this.actualizarListaSubCategorias(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    if (entrada) {
      let nuevaSubCategoria: SubCategoria = new SubCategoria();
      nuevaSubCategoria.idSubCategoria = entrada.id; 
      nuevaSubCategoria.nombre = entrada.nombre.toUpperCase();
      nuevaSubCategoria.categoria.idCategoria = this.categoriaSeleccionada.id;
      nuevaSubCategoria.categoria.nombre = this.categoriaSeleccionada.nombre;

      this.DatosSubCategoriaService.editarSubCategoria(nuevaSubCategoria).subscribe(observador);
    }
  }


  private borrarSubCategoria(id: number, resultado: boolean):void{
    let observador: Observer<SubCategoria> = {
      next: dato => this.actualizarListaSubCategorias(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (resultado){
      this.DatosSubCategoriaService.borrarSubCategoria(id).subscribe(observador);
    }
  }

  ngOnInit() {
    this.actualizarListaCategorias();
  }

  private actualizarListaCategorias():void {
      let observador: Observer<Categoria[]> = {
      next: dato => this.llenarListaCategorias(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.DatosCategoriaService.getCategorias().subscribe(observador);
  }

  private llenarListaCategorias(datos: Categoria[]):void{
    this.categorias.length = 0;
    datos.forEach( s => this.categorias.push( {id: s.idCategoria, nombre: s.nombre} ) );
  }

  private actualizarListaSubCategorias():void {
      let observador: Observer<SubCategoria[]> = {
      next: dato => this.llenarListaSubCategorias(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.DatosSubCategoriaService.getSubCategoriasCategoria(this.categoriaSeleccionada.id).subscribe(observador);
  }

  private llenarListaSubCategorias(datos: SubCategoria[]):void {
    this.subCategorias.length = 0;
    datos.forEach( s => this.subCategorias.push( {id: s.idSubCategoria, nombre: s.nombre} ) );
  }

  eventoEjecucion(datos: {elemento: ModeloLista, accion: string}){

    if (datos.accion === 'editar') {

      this.abrirDialogo(false, datos.elemento);
   
    } else if (datos.accion === 'borrar') {
      let mensaje: string = '¿Desea borrar la Sub Cateogría?';
      this.abrirDialogoConfirmacion(mensaje, datos.elemento.id);

    }
  }

  private estableceCategoríaSeleccionada():void {

    this.categoriaSeleccionada = this.categorias.find(item => item.id === this.idCategoriaSeleccionada );

    this.actualizarListaSubCategorias();
  }


  public restablecedor():void {
    this.idCategoriaSeleccionada = undefined;
    this.categoriaSeleccionada = undefined;
    this.categorias.length = 0;

    this.subCategorias.length = 0;
    
    this.actualizarListaCategorias();
  }
}
