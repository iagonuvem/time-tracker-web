import { TranslationWidth } from '@angular/common';
import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { FocalPoint } from 'src/app/models/FocalPoint';
import { Project } from 'src/app/models/Project';
import { TaskCategory } from 'src/app/models/TaskCategory';
import { TaskDescription } from 'src/app/models/TaskDescription';
import { TimeTrack } from 'src/app/models/TimeTrack';
import { ProjectService } from 'src/app/services/project-service.service';
import { TaskCategoryService } from 'src/app/services/task-category-service.service';
import { TaskDescriptionService } from 'src/app/services/task-description-service.service';
import { TimeTrackService } from '../../../services/time-track.service';


@Component({
  selector: 'time-tracker-component',
  templateUrl: './timetracker.component.html',
  styleUrls: ['./timetracker.component.scss'],
})
export class TimeTrackerComponent implements OnInit {

  group: FormGroup;
  _model: TimeTrack;
  _focalPoints = new BehaviorSubject<Array<FocalPoint>>([]);
  _projects = new BehaviorSubject<Array<any>>([]);
  _taskDescriptions = new BehaviorSubject<Array<any>>([]);
  _taskCategories = new BehaviorSubject<Array<any>>([]);
  // taskDescriptions: TaskDescription[] = [
  //   { id: 1, description: 'Procrastinating ' },
  //   { id: 2, description: 'Using compiling time as an excuse to slack off' },
  //   { id: 3, description: 'Paid poop time' },
  //   { id: 4, description: 'Inserting new bugs to ensure you\'ll always have a job' },
  // ];
  constructor(private toastrService: ToastrService, public timeTrackservice: TimeTrackService, public projectService: ProjectService,
    public taskCategoryService: TaskCategoryService, public taskDescriptionService: TaskDescriptionService, public fb: FormBuilder) {
    
    this._model = new TimeTrack();
    this.group = fb.group({

    });
  }

  get model() {
    return this._model
  };

  ngOnInit(): void {
    this.createFakeData();
    this._focalPoints.next(JSON.parse(localStorage.focalpoints));
    this._taskCategories.next(JSON.parse(localStorage.taskcategorys));
    this._taskDescriptions.next(JSON.parse(localStorage.taskdescriptions));
    this._projects.next(JSON.parse(localStorage.projects));
  }
  trackHours() {
    const isValid = this.validate();
    if (isValid) {
      this.timeTrackservice.addEntity(this._model);
      this._model = new TimeTrack();
      this.toastrService.success("Successfully saved!");
      return;
    }
    this.toastrService.error("Please, check your data.");
  }
  validate() {
    return this._model.date != null &&
      this._model.focalPoint != null &&
      this._model.minutes != null &&
      this._model.project != null &&
      this._model.taskCategory != null &&
      this._model.taskDescription != null;
  }

  createFakeData() {
    if (!localStorage.taskdescriptions) { localStorage.taskdescriptions = `${JSON.stringify([{ id: 1, description: "Pair Programming " }, { id: 2, description: "Meeting" }, { id: 3, description: "Other" }])}`; }
    if (!localStorage.taskcategorys) { localStorage.taskcategorys = `${JSON.stringify([{ id: 1, description: "Software Development" }, { id: 2, description: "Project Management" }, { id: 3, description: "Other" }])}`; }
    if (!localStorage.projects) { localStorage.projects = `${JSON.stringify([{ id: 1, description: "Udemy" }, { id: 2, description: "Pinterest" }, { id: 3, description: "Google" }])}` }
    if (!localStorage.focalpoints) {localStorage.focalpoints = `${JSON.stringify([{ id: 1, name: "John Target" }, { id: 2, name: "Mary Aim" }, { id: 3, name: "Some Manager" }])}`;}

  }
}
