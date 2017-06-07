import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicacionRaizComponent } from "./ubicacion-raiz/ubicacion-raiz.component";

const routes: Routes = [
  {
    path: 'ubicacion',
    component: UbicacionRaizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UbicacionModRoutingModule { }
