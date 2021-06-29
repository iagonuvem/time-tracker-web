import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core/';
import { MatInputModule } from '@angular/material/input';

// Custom Modules
import { ChartsModule } from 'ng2-charts';
import { SettingsComponent } from './members/private/settings/settings.component';
import { RequestApprovalComponent } from './members/private/request-approval/request-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    RequestApprovalComponent
  ],
  exports: [
    //Custom Modules
    ChartsModule,

    //Angular Material Modules
    // MatSidenavModule
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Custom Modules
    ChartsModule,

    //Angular Material Modules
    MatSidenavModule,
    MatToolbarModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
