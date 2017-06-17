import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from "@angular/material";
import { Observer } from 'rxjs/Observer';

import { ModeloLista, EstadoRegion, Pais, Poblacion  } from "../../utilidades";
import { DialogoEntradaComponent, DialogoConfirmacionComponent } from "../../utilidades";
import { DatosPaisService, DatosEstadoRegionService, DatosPoblacionService } from "../../utilidades";

@Component({
  selector: 'app-poblacion-com',
  templateUrl: './poblacion-com.component.html',
  styleUrls: ['./poblacion-com.component.css']
})
export class PoblacionComComponent implements OnInit {
  private idPaisSeleccionado: number;
  private paisSeleccionado: ModeloLista;
  private idEstadoSeleccionado: number;
  private estadoSeleccionado: ModeloLista;
  private poblacionSeleccionada: ModeloLista;
  private paises: ModeloLista[] = [];
  private estados: ModeloLista[] = [];
  private poblaciones: ModeloLista[] = [];
  private mensajeError: string;

  constructor(public dialog: MdDialog, 
              public datosPaises: DatosPaisService, 
              public datosEstado: DatosEstadoRegionService,
              public datosPoblacion: DatosPoblacionService) { }

  private abrirDialogo(nuevo: boolean, paisSeleccionado?: ModeloLista){
    let dialogRef: MdDialogRef<DialogoEntradaComponent>;
    
    if (nuevo){
      dialogRef = this.dialog.open(DialogoEntradaComponent,{ data: {id: 0, nombre: ""} } );
      dialogRef.afterClosed().subscribe( (salida:ModeloLista) => {this.agregaPoblacion( salida );} );
    }else{
      dialogRef = this.dialog.open(DialogoEntradaComponent,{data: paisSeleccionado});
      dialogRef.afterClosed().subscribe( (salida:ModeloLista) => {this.editarPoblacion( salida );} );
    }
  }

    public abrirDialogoConfirmacion(mensaje: string, id: number) {
  
    let dialogRef: MdDialogRef<DialogoConfirmacionComponent>;
    dialogRef = this.dialog.open(DialogoConfirmacionComponent, {data: mensaje});
    dialogRef.afterClosed().subscribe(salida => {this.borrarPoblacion(id, salida);});   
  }

  private agregaPoblacion(entrada: ModeloLista): void {
    let observador: Observer<Poblacion> = {
      next: dato => this.actualizarListaPoblaciones(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (entrada) {
      let nuevaPoblacion: Poblacion = new Poblacion(); //{idPais: 0, nombre: entrada.nombre.toUpperCase()};
      nuevaPoblacion.idPoblacion = null;
      nuevaPoblacion.nombre = entrada.nombre.toUpperCase();
      nuevaPoblacion.estadoRegion.idEstadoRegion = this.estadoSeleccionado.id;
      nuevaPoblacion.estadoRegion.nombre = this.estadoSeleccionado.nombre;

      //let estado: EstadoRegion = {idEstadoRegion: 0, nombre: entrada.nombre.toUpperCase(), pais:{idPais: this.idPaisSeleccionado, nombre: this.paisSeleccionado.nombre}};
      this.datosPoblacion.agregarPoblacion(nuevaPoblacion).subscribe(observador);      
    }
  }

  private editarPoblacion(entrada: ModeloLista): void {
      let observador: Observer<Poblacion> = {
      next: dato => this.actualizarListaPoblaciones(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };
    if (entrada) {
      let nuevaPoblacion: Poblacion = new Poblacion();
      nuevaPoblacion.idPoblacion = entrada.id; 
      nuevaPoblacion.nombre = entrada.nombre.toUpperCase();
      nuevaPoblacion.estadoRegion.idEstadoRegion = this.estadoSeleccionado.id;
      nuevaPoblacion.estadoRegion.nombre = this.estadoSeleccionado.nombre;

      this.datosPoblacion.editarPoblacion(nuevaPoblacion).subscribe(observador);
    }
  }


  private borrarPoblacion(id: number, resultado: boolean):void{
    let observador: Observer<Poblacion> = {
      next: dato => this.actualizarListaPoblaciones(),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    if (resultado){
      this.datosPoblacion.borrarPoblacion(id).subscribe(observador);
    }
  }

  ngOnInit() {
    this.actualizarListaPaises();
  }

  private actualizarListaPaises():void {
      let observador: Observer<Pais[]> = {
      next: dato => this.llenarListaPaises(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.datosPaises.getPaises().subscribe(observador);
  }

  private llenarListaPaises(datos: Pais[]):void{
    this.paises.length = 0;
    datos.forEach( s => this.paises.push( {id: s.idPais, nombre: s.nombre} ) );
  }


  private actualizarListaEstados():void {
      let observador: Observer<EstadoRegion[]> = {
      next: dato => this.llenarListaEstados(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.datosEstado.getEstadosPais(this.paisSeleccionado.id).subscribe(observador);
  }

  private llenarListaEstados(datos: EstadoRegion[]):void {
    this.estados.length = 0;
    datos.forEach( s => this.estados.push( {id: s.idEstadoRegion, nombre: s.nombre} ) );
  }

  private actualizarListaPoblaciones():void {
      let observador: Observer<Poblacion[]> = {
      next: dato => this.llenarListaPoblaciones(dato),
      error: error => this.mensajeError = <any>error,
      complete: () => null
    };

    this.datosPoblacion.getPoblacionesEstado(this.estadoSeleccionado.id).subscribe(observador);
  }

  private llenarListaPoblaciones(datos: Poblacion[]):void {
    this.poblaciones.length = 0;
    datos.forEach( s => this.poblaciones.push( {id: s.idPoblacion, nombre: s.nombre} ) );
  }

  eventoEjecucion(datos: {elemento: ModeloLista, accion: string}){

    if (datos.accion === 'editar') {

      this.abrirDialogo(false, datos.elemento);
   
    } else if (datos.accion === 'borrar') {
      let mensaje: string = '¿Desea borrar la población?';
      this.abrirDialogoConfirmacion(mensaje, datos.elemento.id);

    }

  }

  private establecePaisSeleccionado():void {

    this.paisSeleccionado = this.paises.find(item => item.id === this.idPaisSeleccionado );

    this.actualizarListaEstados();
  }

  private estableceEstadoSeleccionado():void {

    this.estadoSeleccionado = this.estados.find(item => item.id === this.idEstadoSeleccionado );

    this.actualizarListaPoblaciones();
  }

  public restablecedor():void {
    this.idPaisSeleccionado = undefined;
    this.paisSeleccionado = undefined;
    this.paises.length = 0;

    this.idEstadoSeleccionado = undefined;
    this.estadoSeleccionado = undefined;
    this.estados.length = 0;

    this.poblaciones.length = 0;
    
    this.actualizarListaPaises();
  }
}
