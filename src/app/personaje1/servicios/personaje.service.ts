import { Injectable } from "@angular/core";
import { v4 } from 'uuid';
import { Icharacter } from "../interface/character.interface";

@Injectable({
    providedIn: 'root'
})

export class PersonajeService {
    public  characterV: Icharacter[] = [{
        id: v4(),
        name: 'JTR',
        tiempo: 2004,
        debilidad: 'Electricidad'
    }, {
        id: v4(),
        name: 'Cri Cri',
        tiempo: 2004,
        debilidad: 'Hielo'
    }, {
        id: v4(),
        name: 'Urabes',
        tiempo: 2004,
        debilidad: 'Fuego'
    }
];

addCharacterP(character: Icharacter): void {
    console.log('Main Page');
    console.log(character);

    const newCharacter: Icharacter = {id: v4(),... character};
    this.characterV.push(newCharacter);
}

deleteCharacterXId(id: string): void {
    this.characterV = this.characterV.filter(charac => charac.id !== id);
}
}