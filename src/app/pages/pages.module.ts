import { NgModule } from '@angular/core';

/*Modulos */
import { SharedModule } from '../shared/shared.module';

/*Rutas */
import { PagesRoutingModule } from './pages-routing.module';


/*components */
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';





@NgModule({
  declarations: [
    ProgressComponent,
    DashboardComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    Graficas1Component,
    PagesComponent
  ]
})
export class PagesModule { }
