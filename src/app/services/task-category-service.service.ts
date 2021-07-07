import { Injectable } from '@angular/core';
import { TaskCategory } from '../models/TaskCategory';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class TaskCategoryService extends CoreService { }
