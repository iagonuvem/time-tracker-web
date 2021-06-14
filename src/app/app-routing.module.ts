import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'members', 
    pathMatch: 'full' 
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
