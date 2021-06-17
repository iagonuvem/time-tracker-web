import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core/';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  // exports: [
  //   //Angular Material Modules
  //   MatSidenavModule
  // ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Angular Material Modules
    MatSidenavModule,
    MatSliderModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
