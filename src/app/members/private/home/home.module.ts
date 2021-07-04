import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

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
import { MatTableModule } from '@angular/material/table'

// Custom Modules
import { ChartsModule } from 'ng2-charts';
import { TimeTrackerComponent } from '../../modals/timetracker/timetracker.component';

@NgModule({
  imports: [
    CommonModule,

    // Custom Modules
    ChartsModule,

    // Angular Material Modules
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
    MatTableModule
  ],
  declarations: [HomeComponent, TimeTrackerComponent]
})
export class HomePageModule {}
