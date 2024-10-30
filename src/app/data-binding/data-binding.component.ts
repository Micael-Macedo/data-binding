import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  url:string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem = 'https://picsum.photos/seed/picsum/200/300'


  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

}
