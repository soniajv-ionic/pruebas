import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentSonComponent } from "../component-son/component-son.component";

@Component({
  selector: 'app-component-father',
  standalone: true,
  imports: [FormsModule, ComponentSonComponent],
  templateUrl: './component-father.component.html',
  styleUrl: './component-father.component.css'
})
export class ComponentFatherComponent {
tituloOriginal: string = "";
directorOriginal: string = "";
}
