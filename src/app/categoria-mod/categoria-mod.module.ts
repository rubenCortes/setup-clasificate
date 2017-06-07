import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaModRoutingModule } from './categoria-mod-routing.module';
import { CategoriaRaizComponent } from './categoria-raiz/categoria-raiz.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriaModRoutingModule
  ],
  declarations: [CategoriaRaizComponent]
})
export class CategoriaModModule { }
