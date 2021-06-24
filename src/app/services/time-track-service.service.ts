
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, TimeoutError } from 'rxjs';
import { TimeTrackDataService } from '../dataservices/time-track-data-service.service';
import { Project } from '../models/Project';
import { TimeTrack } from '../models/TimeTrack';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackService {

  list = new Array<TimeTrack>();
  trackedTimes = new BehaviorSubject<Array<TimeTrack>>(this.list);
  private _TimeTracks: BehaviorSubject<Array<TimeTrack>> = new BehaviorSubject(Array());

  constructor(private TimeTrackBackendService: TimeTrackDataService) {
    this.loadInitialData();
  }

  get TimeTracks() {
    return new Observable(fn => this._TimeTracks.subscribe(fn));
  }

  loadInitialData() {
    this.TimeTrackBackendService.getAllTimeTracks()
      .subscribe(
        res => {
          const TimeTracks = (<Object[]>res).map((timeTrack: any) => {
            return ({
              id: timeTrack.id,
              user: timeTrack.user,
              date: timeTrack.date,
              minutes: timeTrack.minutes,
              taskCategory: timeTrack.taskCategory,
              taskDescription: timeTrack.taskDescription,
              project: timeTrack.project,
              clientFocalPoint: timeTrack.clientFocalPoint,
              comments: timeTrack.comments
            } as TimeTrack);
          });

          this._TimeTracks.next(TimeTracks);
        },
        err => console.log("Error retrieving TimeTracks")
      );

  }

  addTimeTrack(newTimeTrack: TimeTrack): Observable<TimeTrack[]> {

    let obs = this.TimeTrackBackendService.saveTimeTrack(newTimeTrack);

    obs.subscribe(
      res => {
        const index = this._TimeTracks.getValue().push(newTimeTrack);
        this._TimeTracks.next(this._TimeTracks.getValue());
      });

    return obs;
  }

  // toggleTimeTrack(toggled: TimeTrack): Observable<TimeTrack> {
  //   const obs: Observable<TimeTrack> = this.TimeTrackBackendService.toggleTimeTrack(toggled);

  //   obs.subscribe(
  //     res => {
  //       const TimeTracks = this._TimeTracks.getValue();
  //       const index = TimeTracks.findIndex((TimeTrack: TimeTrack) => TimeTrack.id === toggled.id);
  //       const TimeTrack: TimeTrack = TimeTracks[index];
  //       this._TimeTracks.next(TimeTracks.push({
  //         id: toggled.id,
  //         user: toggled.user,
  //         date: toggled.date,
  //         minutes: toggled.minutes,
  //         taskCategory: toggled.taskCategory,
  //         taskDescription: toggled.taskDescription,
  //         project: toggled.project,
  //         clientFocalPoint: toggled.clientFocalPoint,
  //         comments: toggled.comments
  //       } as TimeTrack));
  //     }
  //   );

  //   return obs;
  // }


  deleteTimeTrack(deleted: TimeTrack): Observable<TimeTrack> {
    const obs: Observable<TimeTrack> = this.TimeTrackBackendService.deleteTimeTrack(deleted);

    obs.subscribe(
      res => {
        let TimeTracks: Array<TimeTrack> = this._TimeTracks.getValue();
        let index = TimeTracks.findIndex((TimeTrack) => TimeTrack.id === deleted.id);
        delete TimeTracks[index];
        this._TimeTracks.next(TimeTracks.filter(t => t!= null));

      }
    );

    return obs;
  }


}
