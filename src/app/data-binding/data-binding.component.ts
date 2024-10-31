import { Component } from '@angular/core';
import { TwoWayDataComponent } from "./two-way-data/two-way-data.component";
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from "../input-property/input-property.component";

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [TwoWayDataComponent, FormsModule, InputPropertyComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  url:string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem = 'https://picsum.photos/seed/picsum/200/300'
  valorAtual:string = ""
  valorSalvo:string = ""
  isMouseOver:boolean = false

  nomeCurso: string = 'Abacate'

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

  botaoClickado(){
    window.alert("Botão selecionado")
  }
  //Necessário informar o tipo de evento
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor:string){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

}
