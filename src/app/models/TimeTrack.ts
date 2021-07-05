import { FocalPoint } from './FocalPoint';
import { Project } from './Project'
import { TaskCategory } from './TaskCategory'
import { TaskDescription } from './TaskDescription'
import { User } from './User'


export class TimeTrack {
	id:Number | undefined;
    user:User | undefined;
    date: Date | undefined;
    minutes:String | undefined;
    taskCategory: TaskCategory | undefined;
    taskDescription: TaskDescription | undefined;
    project: Project | undefined;
    focalPoint: FocalPoint | undefined;
	comments:String  | undefined;
}