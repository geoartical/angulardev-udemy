import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajuste: Ajuste = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(
    @Inject(DOCUMENT) private document,
  ) {
    this.cargarAjuste();
  }

  guardarAjuste() {
    console.log(this.ajuste.temaUrl);
    localStorage.setItem('ajustes', JSON.stringify( this.ajuste ));
  }

  cargarAjuste() {
    if (localStorage.getItem('ajustes')) {
      this.ajuste = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.aplicarTema(this.ajuste.tema);
  }

  aplicarTema(tema: string) {
      // tslint:disable-next-line: prefer-const
      let url: string = `assets/css/colors/${tema}.css`;
      this.document.getElementById('tema').setAttribute('href', url);

      this.ajuste.tema = tema;
      this.ajuste.temaUrl = url;

      this.guardarAjuste();
  }


}


interface Ajuste {
  temaUrl: string;
  tema: string;
}
