import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeTrack } from '../models/TimeTrack';
@Injectable({
  providedIn: 'root'
})
export class TimeTrackDataService {

  http:HttpClient;
  url = "https://localhost:4200/api/task";
  headers = {'Content-Type': 'application/json; charset=utf-8'}
  constructor(http:HttpClient)  {
      this.http = http;
  }

  getAllTimeTracks() {
      return this.http.get(this.url);
  }

  saveTimeTrack(newTimeTrack: TimeTrack) : Observable<Array<TimeTrack>> {
      return this.http.post(this.url, JSON.stringify(newTimeTrack),{headers:this.headers}) as Observable<Array<TimeTrack>>;
  }

  deleteTimeTrack(deletedTimeTrack: TimeTrack): Observable<TimeTrack>  {
      const params = {'id': `${deletedTimeTrack.id}`};
      return this.http.delete<TimeTrack>(this.url, {params: params});
  }


  toggleTimeTrack(toggled: TimeTrack): Observable<TimeTrack> {
    return this.http.put<TimeTrack>(this.url, JSON.stringify(toggled),{headers:this.headers});
  }
}
