import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icharacter } from '../../interface/character.interface';

@Component ({
    selector: 'app-personaje-list',
    standalone: false,
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent {
    @Input()
    public characterList: Icharacter[] = [{
        name: 'George',
        tiempo: 2004,
        poder: 'Si'
    }]

    @Output()
    public OnDelete: EventEmitter<string> = new EventEmitter();

    onDeleteCharacterH(id?: string): void {
        if ( !id ) return;
        console.log({id})
        this.OnDelete.emit(id);
    }
}