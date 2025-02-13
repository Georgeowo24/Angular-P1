import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public titulo: string = 'Hola Mundo';
  public contador: number = 10;

  incrementarValor ( value: number ): void {
    this.contador += value;
  }

  reiniciar () {
    this.contador = 10;
  }
}
