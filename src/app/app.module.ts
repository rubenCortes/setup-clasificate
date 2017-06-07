import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriaModModule } from "./categoria-mod/categoria-mod.module";
import { UbicacionModModule } from "./ubicacion-mod/ubicacion-mod.module";
import { UsuarioModModule } from "./usuario-mod/usuario-mod.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UsuarioModModule,
    UbicacionModModule,
    CategoriaModModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
