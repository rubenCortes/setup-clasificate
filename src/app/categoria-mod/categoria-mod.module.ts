import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from "@angular/material";
import { UtilidadesModule, DialogoEntradaComponent, DialogoConfirmacionComponent } from "../utilidades";
import { DatosCategoriaService, DatosSubCategoriaService } from "../utilidades";

import { CategoriaModRoutingModule } from './categoria-mod-routing.module';
import { CategoriaRaizComponent } from './categoria-raiz/categoria-raiz.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SubCategoriaComponent } from './sub-categoria/sub-categoria.component';

@NgModule({
  imports: [
    UtilidadesModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    CategoriaModRoutingModule
  ],
  declarations: [CategoriaRaizComponent, CategoriaComponent, SubCategoriaComponent],
  providers: [DatosCategoriaService, DatosSubCategoriaService],
  entryComponents: [DialogoEntradaComponent, DialogoConfirmacionComponent]
})
export class CategoriaModModule { }
