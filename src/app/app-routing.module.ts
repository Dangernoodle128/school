import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/Components/navbar/navbar.component';
import { DashboarddComponent } from './core/Components/dashboardd/dashboardd.component';

const routes: Routes = [
  {path: '', redirectTo: 'app/dash', pathMatch: 'full'},
  {path: 'app', component: NavbarComponent, children: [
    {path: 'dash', component: DashboarddComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
