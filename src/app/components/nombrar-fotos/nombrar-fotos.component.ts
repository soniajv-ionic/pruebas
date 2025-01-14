import { Component } from '@angular/core';

@Component({
  selector: 'app-nombrar-fotos',
  standalone: true,
  imports: [],
  templateUrl: './nombrar-fotos.component.html',
  styleUrl: './nombrar-fotos.component.css'
})
export class NombrarFotosComponent {
  textos: string[] = ['Zeus', 'Poseidon', 'Hades'];

  // Función para mostrar el texto al hacer hover
  mostrarTexto(index: number): void {
    if (index === 0) {
      this.textos[0] = 'Texto de la imagen 1';
    } else if (index === 1) {
      this.textos[1] = 'Texto de la imagen 2';
    } else if (index === 2) {
      this.textos[2] = 'Texto de la imagen 3';
    }
  }

  // Función para ocultar el texto cuando el ratón deja de estar sobre la imagen
  ocultarTexto(index: number): void {
    this.textos[index] = '';
  }
}
