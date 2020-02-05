import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Rutas*/
import { AppRoutingModule } from './app-routing.module';



/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

/*Modulos*/
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    ServicesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
