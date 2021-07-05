import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOption } from '@angular/material/core';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TimeTrackerComponent } from './timetracker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeTrackService } from '../../../services/time-track.service';
import { TextFieldModule } from '@angular/cdk/text-field';



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
    ReactiveFormsModule,
    TextFieldModule,
  ],
  providers: [
    { provide: TimeTrackService, useClass: TimeTrackService },
    MatOption
  ],
  exports: [ TimeTrackerComponent ],
  declarations: [ TimeTrackerComponent ],
  
})
export class TimeTrackerModule { }
