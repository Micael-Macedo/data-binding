import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-data.component.html',
  styleUrl: './two-way-data.component.scss'
})
export class TwoWayDataComponent {
  nome: string = ''

  pessoa: any = {
    nome: 'mica',
    idade: 20
  }
}
