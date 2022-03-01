import { Class1 } from "./class1";
import { Student } from "./student";
import { Subject } from "./subject";

export class Teacher {
    id?: number;
    teacherName?: string;
    birthday?: Date;
    gender?: string;
    level?: string;
    objSubject?: Subject;
    graduationYear?: string;
    address?: string;
    telephone?: string;
    email?: string;
    workStartDate?: Date;
    status?: string;
    objClass?: Class1;
    listStuSubject?: Student[]; 
}