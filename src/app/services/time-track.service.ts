
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/Project';
import { TimeTrack } from '../models/TimeTrack';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackService {
  
  list = new Array<TimeTrack>();
  private _TimeTracks: BehaviorSubject<Array<TimeTrack>> = new BehaviorSubject(Array());

  constructor() {
      this.loadInitialData();
  }

  get TimeTracks() {
    return new Observable(fn => this._TimeTracks.subscribe(fn));
  }

  loadInitialData() {
  }

  addTimeTrack(newTimeTrack:TimeTrack):Observable<TimeTrack> {
    return new Observable<TimeTrack>();
  }

  toggleTimeTrack(toggled:TimeTrack): Observable<TimeTrack> {
    return new Observable<TimeTrack>();
  }


  deleteTimeTrack(deleted:TimeTrack): Observable<Boolean> {
    return new Observable<Boolean>();
  }

  
}