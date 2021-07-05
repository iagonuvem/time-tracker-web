
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/Project';
import { TimeTrack } from '../models/TimeTrack';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackService extends CoreService {
  
  
  constructor() {
      super();
      this.configure(new TimeTrack());
  }

  
}