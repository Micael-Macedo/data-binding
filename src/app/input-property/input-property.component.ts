import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.scss'
})
export class InputPropertyComponent {
  //Decorator Input
  @Input('nome') nomeCurso: string = ''
}
