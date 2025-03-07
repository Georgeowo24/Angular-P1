import { AddCharacterComponent } from './personaje1/components/add-character/add-character.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeModule } from './personajes/personaje.modulo';
import { Personaje1Module } from "./personaje1/personaje1.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonajeModule,
    Personaje1Module
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
