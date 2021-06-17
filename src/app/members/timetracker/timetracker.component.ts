import { Component, Inject, OnInit } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AssignmentType } from 'src/app/models/AssignmentType';
import { TimeTracker } from 'src/app/models/TimeTrack';

@Component({
  selector: 'time-tracker',
  templateUrl: './timetracker.component.html',
  styleUrls: ['./timetracker.component.scss'],
  providers:[MatOption]
})
export class TimeTrackerComponent implements OnInit {
  //selected: Date | null;
  assignmentTypes: AssignmentType[] = [
    {id: 1, description: 'Pretending you care'},
    {id: 1, description: 'Procrastinating '},
    {id: 1, description: 'Using compiling time as an excuse to slack off'},
    {id: 1, description: 'Paid poop time'},
    {id: 1, description: 'Inserting new bugs to ensure you\'ll always have a job'},
  ];
  constructor(
    public dialogRef: MatDialogRef<TimeTrackerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TimeTracker) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
