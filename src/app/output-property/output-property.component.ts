import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.scss'
})
export class OutputPropertyComponent {
  @Input('valor') valor: number = 0

  @Output() mudouValor = new EventEmitter<any>()

  incrementar(){
    this.valor++
    this.mudouValor.emit({novoValor: this.valor})
  }
  decrementar(){
    this.valor--
    this.mudouValor.emit({novoValor: this.valor})
  }
}
