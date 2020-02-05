import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, SidebarService, SettingsService } from './services.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService,
    SettingsService
  ],
})
export class ServicesModule { }
