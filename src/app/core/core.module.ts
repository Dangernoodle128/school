import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
