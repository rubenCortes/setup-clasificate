import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaRaizComponent } from "./categoria-raiz/categoria-raiz.component";

const routes: Routes = [
  {
    path: 'categoria',
    component: CategoriaRaizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaModRoutingModule { }
