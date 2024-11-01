import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ciclo',
  standalone: true,
  imports: [],
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.scss'
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10

  constructor(){
    this.log('constructor')
  }
  ngOnChanges(){
    this.log('ngOnChange')
  }
  ngOnInit(){
    this.log('ngOnInit')
  }
  ngDoCheck(){
    this.log('ngDoCheck')
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    this.log('ngOnDestroy')
  }
  private log(hook: string){
    console.log(hook)
  }

}
