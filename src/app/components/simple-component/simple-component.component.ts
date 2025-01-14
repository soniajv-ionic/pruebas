import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  standalone: true,
  imports: [],
  templateUrl: './simple-component.component.html',
  styleUrl: './simple-component.component.css'
})
export class SimpleComponentComponent {
  nombre : string = 'Mundo';
  
}
