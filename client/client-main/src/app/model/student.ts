import { Parent } from "./parent";

export class Student {
    id?: number;
    stuName?: string;
    birthday?: Date;
    address?: string;
    gender?: string;
    admissionDate?: Date;
    status?: string;
    classId?: number;
    year?: string;
    listParent?: Parent[]; 
}