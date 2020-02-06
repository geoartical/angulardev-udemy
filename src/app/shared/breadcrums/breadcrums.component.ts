import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/Operators';
import { Subscription, Subscriber, Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  titulo: string;

  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {

    this.getData().subscribe(
     data => {
       this.titulo = data.titulo;
       this.title.setTitle( 'App | ' + this.titulo );
       const metaTag: MetaDefinition = {
         name: 'description',
         content: this.titulo
       };
       this.meta.updateTag( metaTag );
     }
   );

  }

  ngOnInit() {
  }

   getData() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.data.titulo),
      map( (data: ActivationEnd) => data.snapshot.data )
    );
  }

}
