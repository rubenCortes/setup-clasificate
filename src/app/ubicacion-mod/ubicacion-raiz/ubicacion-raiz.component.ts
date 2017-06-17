import { Component, OnInit, ViewChild } from '@angular/core';

import { EstadoRegionComComponent } from "../estado-region-com/estado-region-com.component";
import { PaisComComponent } from "../pais-com/pais-com.component";
import { PoblacionComComponent } from "../poblacion-com/poblacion-com.component";

@Component({
  selector: 'app-ubicacion-raiz',
  templateUrl: './ubicacion-raiz.component.html',
  styleUrls: ['./ubicacion-raiz.component.css']
})
export class UbicacionRaizComponent implements OnInit {

  @ViewChild(EstadoRegionComComponent)
  private estadoCompomente: EstadoRegionComComponent;

  @ViewChild(PaisComComponent)
  private paisComponente: PaisComComponent;

  @ViewChild(PoblacionComComponent)
  private poblacionComponente: PoblacionComComponent;

  constructor() { }

  private cambioTab(valor: any):void {
    switch (valor.index) {
      case 0:
        this.paisComponente.actualizarLista();
        break;
      case 1:
        this.estadoCompomente.restablecedor();
        break;
      case 2:
        this.poblacionComponente.restablecedor();
        break;

    }
  
  }

  ngOnInit() {
  }

}
