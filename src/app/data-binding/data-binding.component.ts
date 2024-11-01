import { Component } from '@angular/core';
import { TwoWayDataComponent } from "./two-way-data/two-way-data.component";
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from "../input-property/input-property.component";
import { OutputPropertyComponent } from '../output-property/output-property.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [TwoWayDataComponent, FormsModule, InputPropertyComponent, OutputPropertyComponent],
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
  valorInicial:number = 15

  nomeCurso: string = 'Abacate'


  onMudouValor(evento:any){
    console.log(evento.novoValor)
  }

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
