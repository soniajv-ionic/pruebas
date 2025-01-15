import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentMetaInfoComponent } from "../component-meta-info/component-meta-info.component";

@Component({
  selector: 'app-component-metahuman',
  standalone: true,
  imports: [FormsModule, ComponentMetaInfoComponent],
  templateUrl: './component-metahuman.component.html',
  styleUrl: './component-metahuman.component.css'
})
export class ComponentMetahumanComponent {
  nombreReal: string = "";
  identidadSecreta: string = "";
  urlImagen: string = "https://img.posterstore.com/zoom/wb0057-8superman-cartoon50x70.jpg";
}
