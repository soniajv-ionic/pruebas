import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nombrar-fotos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nombrar-fotos.component.html',
  styleUrl: './nombrar-fotos.component.css'
})

export class MiComponenteComponent {

  textos: string[] = [
    'Esta es la imagen de Zeus.',
    'Esta es la imagen de Poseidón.',
    'Esta es la imagen de Hades.'
  ];


  textoVisible: boolean[] = [false, false, false];


  mostrarTexto(index: number) {
    this.textoVisible[index] = true;
  }


  ocultarTexto(index: number) {
    this.textoVisible[index] = false;
  }
}

