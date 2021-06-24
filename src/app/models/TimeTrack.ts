import { ClientFocalPoint } from './ClientFocalPoint'
import { Project } from './Project'
import { TaskCategory } from './TaskCategory'
import { TaskDescription } from './TaskDescription'
import { User } from './User'


export interface TimeTrack {
	id:Number;
    user:User;
    date: Date;
    minutes:String;
    taskCategory: TaskCategory;
    taskDescription: TaskDescription;
    project: Project;
    clientFocalPoint:ClientFocalPoint;
	comments:String ;
}
