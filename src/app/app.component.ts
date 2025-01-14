import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponentComponent } from "./components/simple-component/simple-component.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { MiniformularioComponent } from "./components/miniformulario/miniformulario.component";
import { NombrarFotosComponent } from "./components/nombrar-fotos/nombrar-fotos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleComponentComponent, PerfilComponent, MiniformularioComponent, NombrarFotosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas';
}
