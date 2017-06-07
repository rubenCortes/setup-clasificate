import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModeloLista } from "../../utilidades";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() items: ModeloLista[];
  @Output() accionItem = new EventEmitter<{elemento: ModeloLista, accion: string}>();

  constructor() { }
 
  ejecutorAccion(item: ModeloLista, accion: string){
    this.accionItem.emit({elemento: item, accion: accion});
  }

  ngOnInit() {
  }

}
