import { Component, Inject, OnInit } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Project } from 'src/app/models/Project';
import { TaskCategory } from 'src/app/models/TaskCategory';
import { TaskDescription } from 'src/app/models/TaskDescription';
import { TimeTrack } from 'src/app/models/TimeTrack';
import { TimeTrackViewModel } from './time-track-viewmodel';

@Component({
  selector: 'time-tracker',
  templateUrl: './timetracker.component.html',
  styleUrls: ['./timetracker.component.scss'],
  providers:[MatOption]
})
export class TimeTrackerComponent implements OnInit {
  //selected: Date | null;
  //selected: Date | null;
  project!: string;
  taskDescription!:string;
  taskCategory!: string;
  taskDescriptions: TaskDescription[] = [
    {id: 1, description: 'Pretending you care'},
    {id: 1, description: 'Procrastinating '},
    {id: 1, description: 'Using compiling time as an excuse to slack off'},
    {id: 1, description: 'Paid poop time'},
    {id: 1, description: 'Inserting new bugs to ensure you\'ll always have a job'},
  ];
  constructor(
    public dialogRef: MatDialogRef<TimeTrackerComponent>,
    @Inject(MAT_DIALOG_DATA) public model: TimeTrack) {}

  onNoClick(): void {
    this.dialogRef.close();
    
  }

  ngOnInit(): void {
  }

}
