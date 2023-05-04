import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CarouselComponent } from './Components/carousel/carousel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DashboardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
