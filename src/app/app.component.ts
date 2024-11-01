import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DataBindingComponent } from "./data-binding/data-binding.component";
import { CicloComponent } from "./ciclo/ciclo.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataBindingComponent, CicloComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-binding'

  deletarCiclo: boolean = false

  valor:number = 5

  mudarValor(){
    this.valor++
    console.log(this.valor)
  }

  destruirCiclo(){
    this.deletarCiclo = true
  }
}
