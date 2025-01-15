import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  tareas = new Array<string>();
  constructor() { }
  addTarea(tarea : string) {
    this.tareas.push(tarea);
  }
  getTareas() : Array<string>{
    return this.tareas;
  }
}
