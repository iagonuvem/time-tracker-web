import { FocalPoint } from "./FocalPoint";

export class Project {
	id:Number | undefined;
    description: String | undefined;
    focalPoints: Array<FocalPoint> = [];
}
