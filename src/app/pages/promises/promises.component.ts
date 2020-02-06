import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {


    this.contarTres().then(
      () => console.log('promesa resuelta')
    )
    .catch( error => console.error('Error en la promesa', error));
   }

  ngOnInit() {
  }


  contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {

      let contador = 0;


      let intervalo = setInterval(() => {

        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }

      }, 1000);

    });
  }

}
