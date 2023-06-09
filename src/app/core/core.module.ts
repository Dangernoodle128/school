import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { DashboarddComponent } from './Components/dashboardd/dashboardd.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CarouselComponent } from './Components/carousel/carousel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DashboarddComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    DragDropModule,

  ]
})
export class CoreModule { }
