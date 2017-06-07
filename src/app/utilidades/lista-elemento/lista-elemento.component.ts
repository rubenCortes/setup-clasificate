import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-elemento',
  templateUrl: './lista-elemento.component.html',
  styleUrls: ['./lista-elemento.component.css']
})
export class ListaElementoComponent implements OnInit {
  
  @Input() nombre: string;
  @Output() accion = new EventEmitter<string>(); 

  constructor() { }

  accionUsuario(dato: string){
    this.accion.emit(dato);
  }
  ngOnInit() {
  }

}
