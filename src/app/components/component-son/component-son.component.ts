import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-son',
  standalone: true,
  imports: [],
  templateUrl: './component-son.component.html',
  styleUrl: './component-son.component.css'
})
export class ComponentSonComponent {
@Input() titulo: string ="";
@Input() director: string ="";
}
