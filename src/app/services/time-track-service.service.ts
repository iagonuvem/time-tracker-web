
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TimeTrackDataService } from '../dataservices/time-track-data-service.service';
import { Project } from '../models/Project';
import { TimeTrack } from '../models/TimeTrack';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackServiceService {
  
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
                  const TimeTracks = (<Object[]>res.json()).map((TimeTrack: any) =>
                      new TimeTrack({id:TimeTrack.id, description:TimeTrack.description,completed: TimeTrack.completed}));

                  this._TimeTracks.next(TimeTracks);
              },
              err => console.log("Error retrieving TimeTracks")
          );

  }

  addTimeTrack(newTimeTrack:TimeTrack):Observable {

      let obs = this.TimeTrackBackendService.saveTimeTrack(newTimeTrack);

      obs.subscribe(
              res => {
                  this._TimeTracks.next(this._TimeTracks.getValue().push(newTimeTrack));
              });

      return obs;
  }

  toggleTimeTrack(toggled:TimeTrack): Observable {
      let obs: Observable = this.TimeTrackBackendService.toggleTimeTrack(toggled);

      obs.subscribe(
          res => {
              let TimeTracks = this._TimeTracks.getValue();
              let index = TimeTracks.findIndex((TimeTrack: TimeTrack) => TimeTrack.id === toggled.id);
              let TimeTrack:TimeTrack = TimeTracks.get(index);
              this._TimeTracks.next(TimeTracks.set(index, new TimeTrack({id:toggled.id, description:toggled.description, completed:!toggled.completed}) ));
          }
      );

      return obs;
  }


  deleteTimeTrack(deleted:TimeTrack): Observable {
      let obs: Observable = this.TimeTrackBackendService.deleteTimeTrack(deleted);

      obs.subscribe(
              res => {
                  let TimeTracks: List<TimeTrack> = this._TimeTracks.getValue();
                  let index = TimeTracks.findIndex((TimeTrack) => TimeTrack.id === deleted.id);
                  this._TimeTracks.next(TimeTracks.delete(index));

              }
          );

      return obs;
  }

  
}
