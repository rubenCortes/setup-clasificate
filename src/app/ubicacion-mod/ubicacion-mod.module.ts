import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { MaterialModule } from "@angular/material";
import { UtilidadesModule, DialogoEntradaComponent, DialogoConfirmacionComponent } from "../utilidades";
import { DatosPaisService, DatosEstadoRegionService, DatosPoblacionService } from "../utilidades";


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
    FormsModule,
    UbicacionModRoutingModule
  ],
  declarations: [
    UbicacionRaizComponent, 
    PaisComComponent, 
    EstadoRegionComComponent, 
    PoblacionComComponent
  ],
  providers: [DatosPaisService, DatosEstadoRegionService, DatosPoblacionService],
  entryComponents: [DialogoEntradaComponent, DialogoConfirmacionComponent]
})
export class UbicacionModModule { }
