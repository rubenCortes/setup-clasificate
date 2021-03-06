import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";

import { Observer } from 'rxjs/Observer';

import { ModeloLista, Pais, DatosPaisService } from "../../utilidades";
import { DialogoEntradaComponent, DialogoConfirmacionComponent } from "../../utilidades";

@Component({
  selector: 'app-pais-com',
  templateUrl: './pais-com.component.html',
  styleUrls: ['./pais-com.component.css']
})
export class PaisComComponent implements OnInit {

  private paisSeleccionado: ModeloLista;
  private paises: ModeloLista[] = [];
  private mensajeError: string;

  constructor(public dialog: MdDialog, 
              public datos: DatosPaisService) { }

  public abrirDialogo(nuevo: boolean, paisSeleccionado?: ModeloLista){
    let dialogRef: MdDialogRef<DialogoEntradaComponent>;
    
    if (nuevo){ // Crear un país
      dialogRef = this.dialog.open(DialogoEntradaComponent,{ data: {id: 0, nombre: ""} } );
      dialogRef.afterClosed()
      .subscribe( salida => {this.agregaPais( salida );} );
    }else{ // Editar un país
      dialogRef = this.dialog.open(DialogoEntradaComponent,{data: paisSeleccionado});
      dialogRef.afterClosed()
      .subscribe( salida => {this.editarPais( salida );} );
    }
  }

  public abrirDialogoConfirmacion(mensaje: string, id: number) {
  
    let dialogRef: MdDialogRef<DialogoConfirmacionComponent>;
    dialogRef = this.dialog.open(DialogoConfirmacionComponent, {data: mensaje});
    dialogRef.afterClosed().subscribe(salida => {this.borrarPais(id, salida);});   
  }

  public agregaPais(entrada: ModeloLista): void {
    let observador: Observer<Pais> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    if (entrada) {
      let nuevoPais: Pais = {idPais: 0, nombre: entrada.nombre.toUpperCase()};
      this.datos.agregarPais(nuevoPais).subscribe(observador);
    }
  }

  public editarPais(entrada: ModeloLista): void {
      let observador: Observer<Pais> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    if (entrada){
      let nuevoPais: Pais = {idPais: entrada.id, nombre: entrada.nombre.toUpperCase()};
      this.datos.editarPais(nuevoPais).subscribe(observador);
    }
  }

  public borrarPais(id: number, resultado: boolean): void {
    let observador: Observer<Pais> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (resultado){
      this.datos.borrarPais(id).subscribe(observador);
    }

  }


  ngOnInit() {
    this.actualizarLista();
  }

  actualizarLista():void {
      let observador: Observer<Pais[]> = {
      next: dato => this.llenarLista(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.datos.getPaises().subscribe(observador);
  }

  llenarLista(datos: Pais[]):void{
    this.paises.length = 0;
    datos.forEach( s => this.paises.push({id: s.idPais, nombre: s.nombre}) );
  }

  eventoEjecucion(datos: {elemento: ModeloLista, accion: string}){

    if (datos.accion === 'editar') {

      this.abrirDialogo(false, datos.elemento);
   
    } else if (datos.accion === 'borrar') {
      let mensaje: string = '¿Desea borrar el páis?';
      this.abrirDialogoConfirmacion(mensaje, datos.elemento.id);

    }

  }

}
