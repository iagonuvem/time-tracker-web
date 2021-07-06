import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './members/public/login/login.component'

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  {
    path: 'login',
    // canActivate: [AuthGuard],
    component: LoginComponent
  },
  {
    path: 'members',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./members/member-routing.module').then(m => m.MemberRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
