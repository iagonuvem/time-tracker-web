import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { TaskDescription } from 'src/app/models/TaskDescription';
import { TimeTrack } from 'src/app/models/TimeTrack';
import { TimeTrackService } from '../../../services/time-track.service';


@Component({
  selector: 'time-tracker-component',
  templateUrl: './timetracker.component.html',
  styleUrls: ['./timetracker.component.scss'],
  providers:[MatOption],
})
export class TimeTrackerComponent implements OnInit {
  group :FormGroup;
  _model: TimeTrack;
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
  constructor(public service: TimeTrackService, public fb: FormBuilder) {
    this._model = { } as TimeTrack;
    this.group = fb.group({
      
    });
  }

  get model () {
    return this._model
  };
  
  ngOnInit(): void {
  }

}
