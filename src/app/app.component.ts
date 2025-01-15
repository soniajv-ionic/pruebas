import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponentComponent } from "./components/simple-component/simple-component.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { MiniformularioComponent } from "./components/miniformulario/miniformulario.component";
import { MiComponenteComponent } from "./components/nombrar-fotos/nombrar-fotos.component";
import { ComponentFatherComponent } from "./components/component-father/component-father.component";
import { ComponentSonComponent } from "./components/component-son/component-son.component";
import { ComponentMetahumanComponent } from "./components/component-metahuman/component-metahuman.component";
import { ClienteServicio1Component } from "./cliente-servicio-1/cliente-servicio-1.component";
import { ClienteServicio2Component } from "./cliente-servicio-2/cliente-servicio-2.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleComponentComponent, PerfilComponent, MiniformularioComponent, MiComponenteComponent, ComponentFatherComponent, ComponentSonComponent, ComponentMetahumanComponent, ClienteServicio1Component, ClienteServicio2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebas';
}
