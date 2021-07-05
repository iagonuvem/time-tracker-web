import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import {Project} from '../models/Project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService extends CoreService{ }
