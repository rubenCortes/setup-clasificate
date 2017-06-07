import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";

import { Observer } from 'rxjs/Observer';

import { DialogoEntradaComponent, ModeloLista, Pais, DatosPaisService } from "../../utilidades";

@Component({
  selector: 'app-pais-com',
  templateUrl: './pais-com.component.html',
  styleUrls: ['./pais-com.component.css']
})
export class PaisComComponent implements OnInit {

  private paisSeleccionado: ModeloLista;
  private paises: ModeloLista[] = [];
  private mensajeError: string;

  constructor(public dialog: MdDialog, public datos: DatosPaisService) { }

  public abrirDialogo(nuevo: boolean, paisSeleccionado?: ModeloLista){
    let dialogRef: MdDialogRef<DialogoEntradaComponent>;
    
    if (nuevo){
      dialogRef = this.dialog.open(DialogoEntradaComponent,{ data: {id: 0, nombre: ""} } );
      dialogRef.afterClosed()
      .subscribe( salida => {this.agregaPais( salida );} );
    }else{
      dialogRef = this.dialog.open(DialogoEntradaComponent,{data: paisSeleccionado});
      dialogRef.afterClosed()
      .subscribe( salida => {this.editarPais( salida );} );
    }
  }

  public agregaPais(entrada: ModeloLista): void {
    let observador: Observer<Pais> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    let nuevoPais: Pais = {idPais: 0, nombre: entrada.nombre.toUpperCase()};
    this.datos.agregarPais(nuevoPais).subscribe(observador);
  }



  public editarPais(entrada: ModeloLista): void {
      let observador: Observer<Pais> = {
      next: dato => this.actualizarLista(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    let nuevoPais: Pais = {idPais: entrada.id, nombre: entrada.nombre.toUpperCase()};
    this.datos.agregarPais(nuevoPais).subscribe(observador);
  }


  public borrarPais(id: number):void{
    let indice: number = 1;
    this.paises.splice(indice, 1);
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
    let nombre = datos.elemento.nombre;
    let accion = datos.accion;
    let mensaje = `Nombre de elemento: ${nombre} y acción a ejecutar: ${accion}`;
    alert(mensaje);
  }

}
