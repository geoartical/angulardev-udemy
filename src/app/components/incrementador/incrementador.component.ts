import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() percent: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    /*console.log('valor de leyenda:', this.leyenda);
    console.log('valor de percent:', this.percent);*/
   }

  ngOnInit() {
  /*  console.log('valor de leyenda:', this.leyenda);
    console.log('valor de percent:', this.percent);*/
  }

  changes(cambio: number) {

    /*const elemenHtml: any = document.getElementsByName('progreso');*/

    if (cambio > 100) {
      this.percent = 100;
    } else if (cambio <= 0) {
      this.percent = 0;
    } else {
      this.percent = cambio;
    }

   /*elemenHtml.value = this.percent;*/
    this.txtProgress.nativeElement.value = this.percent;
    this.cambioValor.emit( this.percent );
  }

  cambiarValor( valor: number ) {
    if (this.percent < 100 && valor > 0) {
      this.percent = this.percent + valor;
    }
    if (this.percent > 0 && valor < 0) {
      this.percent = this.percent + valor;
  }

    /*retornamos el cambio de valor de percent con un EmmiterEvent */
    this.cambioValor.emit( this.percent );

    this.txtProgress.nativeElement.focus();
}

}
