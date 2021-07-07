import { Injectable } from '@angular/core';
import { TaskDescription } from '../models/TaskDescription';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class TaskDescriptionService extends CoreService {}
