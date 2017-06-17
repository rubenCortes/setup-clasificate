import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";

import { Observer } from 'rxjs/Observer';

import { ModeloLista, Categoria, DatosCategoriaService } from "../../utilidades";

import { DialogoEntradaComponent, DialogoConfirmacionComponent } from "../../utilidades";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

private categoriaSeleccionada: ModeloLista;
  private categorias: ModeloLista[] = [];
  private mensajeError: string;

  constructor(public dialog: MdDialog, 
              public datos: DatosCategoriaService) { }

  public abrirDialogo(nuevo: boolean, categoriaSeleccionada?: ModeloLista){
    let dialogRef: MdDialogRef<DialogoEntradaComponent>;
    
    if (nuevo){ // Crear un país
      dialogRef = this.dialog.open(DialogoEntradaComponent,{ data: {id: 0, nombre: ""} } );
      dialogRef.afterClosed()
      .subscribe( salida => {this.agregarCategoria( salida );} );
    }else{ // Editar un país
      dialogRef = this.dialog.open(DialogoEntradaComponent,{data: categoriaSeleccionada});
      dialogRef.afterClosed()
      .subscribe( salida => {this.editarCategoria( salida );} );
    }
  }

  public abrirDialogoConfirmacion(mensaje: string, id: number) {
  
    let dialogRef: MdDialogRef<DialogoConfirmacionComponent>;
    dialogRef = this.dialog.open(DialogoConfirmacionComponent, {data: mensaje});
    dialogRef.afterClosed().subscribe(salida => {this.borrarCategoria(id, salida);});   
  }

  public agregarCategoria(entrada: ModeloLista): void {
    let observador: Observer<Categoria> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    if (entrada) {
      let nuevaCategoria: Categoria = {idCategoria: 0, nombre: entrada.nombre.toUpperCase()};
      this.datos.agregarCategoria(nuevaCategoria).subscribe(observador);
    }
  }

  public editarCategoria(entrada: ModeloLista): void {
      let observador: Observer<Categoria> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    if (entrada){
      let nuevaCategoria: Categoria = {idCategoria: entrada.id, nombre: entrada.nombre.toUpperCase()};
      this.datos.editarCategoria(nuevaCategoria).subscribe(observador);
    }
  }

  public borrarCategoria(id: number, resultado: boolean): void {
    let observador: Observer<Categoria> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (resultado){
      this.datos.borrarCategoria(id).subscribe(observador);
    }

  }


  ngOnInit() {
    this.actualizarLista();
  }

  actualizarLista():void {
      let observador: Observer<Categoria[]> = {
      next: dato => this.llenarLista(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.datos.getCategorias().subscribe(observador);
  }

  llenarLista(datos: Categoria[]):void{
    this.categorias.length = 0;
    datos.forEach( s => this.categorias.push({id: s.idCategoria, nombre: s.nombre}) );
  }

  eventoEjecucion(datos: {elemento: ModeloLista, accion: string}){

    if (datos.accion === 'editar') {

      this.abrirDialogo(false, datos.elemento);
   
    } else if (datos.accion === 'borrar') {
      let mensaje: string = '¿Desea borrar la categoria?';
      this.abrirDialogoConfirmacion(mensaje, datos.elemento.id);

    }

  }

}
