import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-meta-info',
  standalone: true,
  imports: [],
  templateUrl: './component-meta-info.component.html',
  styleUrl: './component-meta-info.component.css'
})
export class ComponentMetaInfoComponent {
  @Input() nombre: string = "";
  @Input() identidad: string = "";
  @Input() url: string = "";
}
