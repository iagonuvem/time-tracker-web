import { FocalPoint } from "./FocalPoint";

export interface Project {
	id:Number | undefined;
    description: String | undefined;
    focalPoints: Array<FocalPoint> | [];
}
