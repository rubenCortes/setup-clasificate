import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioModRoutingModule } from './usuario-mod-routing.module';
import { UsuarioRaizComponent } from './usuario-raiz/usuario-raiz.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioModRoutingModule
  ],
  declarations: [UsuarioRaizComponent]
})
export class UsuarioModModule { }
