import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/Operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription =  this.countObservable()
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error', error),
      () => console.log('Observer termino!')
    );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('se fue');
    this.subscription.unsubscribe();
  }

  countObservable(): Observable<any> {
    return new Observable(( observer: Subscriber<any>) => {

      // tslint:disable-next-line: prefer-const
      let contador = 0;

      // tslint:disable-next-line: prefer-const
      let intervalo = setInterval( () => {
          contador += 1;

          const salida = {
            valor: contador
          };

          observer.next(salida);

        /*   if (contador === 3) {
            clearInterval(intervalo);
            observer.complete();
          } */

          /* if (contador === 2) {
            clearInterval(intervalo);
            observer.error('Auxilio me desmayo!');
          } */

        }, 1000 );
    }).pipe(
      map(resp => resp.valor ),
      filter(( valor, index) => {
            if (valor % 2 === 1) {
              /* Es impar */
              return true;
            } else {
              /* Es par */
              return false;
            }
      })
    );
  }
}
