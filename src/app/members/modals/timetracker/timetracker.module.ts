import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TimeTrackerComponent } from './timetracker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TimeTrackService } from 'src/app/services/time-track-service.service';
import { TimeTrackDataService } from 'src/app/dataservices/time-track-data-service.service';



@NgModule({
  imports: [
    CommonModule,
    // Angular Material Modules
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true, direction: 'ltr' } },
    {provide: TimeTrackDataService},
    { provide: TimeTrackService }
  ],
  declarations: [TimeTrackerComponent]
})
export class TimeTrackerModule { }
