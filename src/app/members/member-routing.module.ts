import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageModule } from './private/home/home.module';
import { HomeComponent } from './private/home/home.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    
    // loadChildren: () => import('./private/home/home.module').then(m => m.HomePageModule) 
    component: HomeComponent
  },

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
