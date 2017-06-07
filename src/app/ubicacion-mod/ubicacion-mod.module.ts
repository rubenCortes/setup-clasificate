import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "@angular/material";
import { UtilidadesModule, DialogoEntradaComponent } from "../utilidades";
import { DatosPaisService } from "../utilidades";


import { UbicacionModRoutingModule } from './ubicacion-mod-routing.module';
import { UbicacionRaizComponent } from './ubicacion-raiz/ubicacion-raiz.component';
import { PaisComComponent } from './pais-com/pais-com.component';
import { EstadoRegionComComponent } from './estado-region-com/estado-region-com.component';
import { PoblacionComComponent } from './poblacion-com/poblacion-com.component';

@NgModule({
  imports: [
    UtilidadesModule,
    MaterialModule,
    CommonModule,
    UbicacionModRoutingModule
  ],
  declarations: [
    UbicacionRaizComponent, 
    PaisComComponent, 
    EstadoRegionComComponent, 
    PoblacionComComponent
  ],
  providers: [DatosPaisService],
  entryComponents: [DialogoEntradaComponent]
})
export class UbicacionModModule { }
