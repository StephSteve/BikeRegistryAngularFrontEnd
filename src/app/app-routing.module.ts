import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
