import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    CommonModule,
    // Angular Material Modules
    MatSidenavModule,
    MatToolbarModule,
    MatSliderModule
  ],
  declarations: [HomeComponent]
})
export class HomePageModule {}
