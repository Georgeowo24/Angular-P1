import { Component, EventEmitter, Output } from "@angular/core";
import { Icharacter } from "../../interface/character.interface";

@Component ({
    selector: 'app-per1-add-character',
    standalone: false,
    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.css'
})

export class AddCharacterComponent {
    @Output()
    public onNuevoCharacter: EventEmitter <Icharacter> = new EventEmitter();

    public character: Icharacter = {
        name: "",
        tiempo: 0,
        poder: 'Non'
    }

    enviarCharacters(): void {
        console.log( this.character );
        if ( this.character.name.length === 0 ) return;
        this.onNuevoCharacter.emit({...this.character}); // Los tres puntos es para pasar objetos por referencia

        this.character.name = '';
        this.character.tiempo = 0;

        this.character = {name: '', tiempo: 0, poder: 'Va'}

    }
}