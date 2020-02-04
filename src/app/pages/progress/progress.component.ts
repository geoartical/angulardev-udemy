import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

 percent1: number = 40;
 percent2: number = 25;

  constructor() { }

  ngOnInit() {
  }

actualizarBar( event: number ) {
    this.percent1 = event;
    this.percent2 = event;
}





}
