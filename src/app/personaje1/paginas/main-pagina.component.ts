import { Component } from "@angular/core";
import { Icharacter } from "../interface/character.interface";
import { PersonajeService } from "../servicios/personaje.service";


@Component ({
    selector: 'app-per1-main-pagina',
    standalone: false,
    templateUrl: './main-pagina.component.html'
})

export class MainPageComponent {
    constructor(private perService: PersonajeService){}

    get characterV(): Icharacter[]{
        return [...this.perService.characterV];
    }

    onDeleteCharacter(id: string){
        this.perService.deleteCharacterXId(id);//personaje.service.ts
    }

    onNewCharacter(character: Icharacter):void{
        this.perService.addCharacterP(character);//personaje.service.ts
    }
}

