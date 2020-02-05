import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document,
    public temaAjuste: SettingsService
  ) { }

  ngOnInit() {
    this.aplicarCheck();
  }

  cambiarTema(tema: string, link: any) {
      console.log(tema);
      this.cambiarCheck(link);
      this.temaAjuste.aplicarTema(tema);
  }

  cambiarCheck(link: any) {
    console.log(link);
    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
        ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  aplicarCheck() {
    let selectores: any = document.getElementsByClassName('selector');

   let tema = this.temaAjuste.ajuste.tema;

    for ( let ref of selectores ) {
      if ( tema === ref.getAttribute('data-theme') ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
