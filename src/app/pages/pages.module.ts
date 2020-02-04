import { NgModule } from '@angular/core';

/*Rutas */
import { PagesRoutingModule } from './pages-routing.module';
/*Modulos */
import { SharedModule } from '../shared/shared.module';

/*components */
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';





@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    Graficas1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    Graficas1Component,
    PagesComponent
  ]
})
export class PagesModule { }
