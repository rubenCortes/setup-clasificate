import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioRaizComponent } from "./usuario-raiz/usuario-raiz.component";

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioRaizComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioModRoutingModule { }
