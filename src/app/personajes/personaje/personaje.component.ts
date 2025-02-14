import { Component } from "@angular/core";  

@Component ({
    selector: 'app-personajes-personaje',
    standalone: false,
    templateUrl: './personaje.component.html',
    styleUrl: './personaje.component.css'
})

export class PersonajeComponent {
    public nombre: string = 'Jorge';
    public edad: number = 20;

    get mensaje(): string {
        return this.nombre.toUpperCase();
    }

    getConcatenar(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void {
        this.nombre = 'El Venoso';
    }

    cambiarEdad(): void {
        this.edad = 22;
    }

    resetear(): void {
        this.nombre = 'Jorge';
        this.edad = 20;
    }
}