import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component'
import { HomeComponent } from '../home/home.component'
import { SettingsComponent } from '../settings/settings.component';
import { RequestApprovalComponent } from '../request-approval/request-approval.component';

const routes: Routes = [
  {
    path: 'master',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'request-approval',
        component: RequestApprovalComponent
      },
    ]
  },
  { 
    path: '',
    redirectTo: 'master/home', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule { }
