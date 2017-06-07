import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MaterialModule } from "@angular/material";

import { UtilidadesRoutingModule } from './utilidades-routing.module';
import { ListaComponent } from './lista/lista.component';
import { ListaElementoComponent } from './lista-elemento/lista-elemento.component';
import { DialogoEntradaComponent } from './dialogo-entrada/dialogo-entrada.component';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    HttpModule,
    UtilidadesRoutingModule
  ],
  declarations: [ListaComponent, ListaElementoComponent, DialogoEntradaComponent],
  exports: [ListaComponent, DialogoEntradaComponent]
})
export class UtilidadesModule { }
