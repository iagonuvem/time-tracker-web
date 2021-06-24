import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/Project';
import { TimeTrack } from '../models/TimeTrack';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackServiceService {
  url = "https://localhost:4200/api/task";
  list = new Array<TimeTrack>();
  trackedTimes = new BehaviorSubject<Array<TimeTrack>>(this.list);
  constructor(private http: HttpClient,) { }

  getTimeTracks():Observable<TimeTrack[]>{
    return this.http.get<TimeTrack[]>(this.url);
  }
}
