import {AssignmentType} from './AssignmentType'
import {ClientFocalPoint} from './ClientFocalPoint'
import {Project} from './Project'


export interface TimeTracker {
	id:Number;
    user:string;
    date: Date;
    minutes:Number;
    assignmentType: AssignmentType;
    project: Project;
    clientFocalPoint:ClientFocalPoint;
	description:String ;
}
