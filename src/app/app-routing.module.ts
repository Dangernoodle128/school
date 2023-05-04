import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/Components/navbar/navbar.component';
import { DashboardComponent } from './core/Components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'app', component: NavbarComponent, children: [
    {path: 'dash',component: DashboardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
