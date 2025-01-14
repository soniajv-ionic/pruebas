import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  nombre : string = 'Doctor';
edad : number = 1200;
imagen : string = 'TARDIS1.jpg';
alt: string = 'TARDIS';
}
