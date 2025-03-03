import { NgModule } from '@angular/core';
import { PersonajeModule } from './../personajes/personaje.modulo';
import { ListComponent } from "./components/list/list.component";
import { AddCharacterComponent } from "./components/add-character/add-character.component";
import { MainPageComponent } from "./paginas/main-pagina.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'

@NgModule ({
    declarations: [
        MainPageComponent,
        ListComponent,
        AddCharacterComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})

export class Personaje1Module {

}