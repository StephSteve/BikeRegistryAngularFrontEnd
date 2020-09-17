import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes) // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
