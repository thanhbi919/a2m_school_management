import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Class1 } from 'src/app/model/class1';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findAllClass(): Observable<Class1[]> {
    return this.http.get<Class1[]>(this.apiUrl + "class/list");
  }

  createClass(data: any): Observable<Class1>{
    return this.http.post<Class1>(this.apiUrl+"class/save",data);
  }

  updateClass(data: any): Observable<Class1>{
    return this.http.put<Class1>(this.apiUrl+"class/update",data);
  }

  getListTeacher(): Observable<any>{
    return this.http.get<any>(this.apiUrl+"class/listTeacher");
  }

  findByClassId(classId: any): Observable<Class1>{
    let params = new HttpParams().set('classId', classId);
    return this.http.get<Class1>(this.apiUrl+"class/findById",{params});
  }

  findByClassName(className: any): Observable<Class1>{
    let params = new HttpParams().set('className', className);
    return this.http.get<Class1>(this.apiUrl+"class/findByClassName",{params});
  }

  searchClass(classId: any, className: any): Observable<Class1>{
    let params = new HttpParams().set('className', className).set('classId',classId);
    return this.http.get<Class1>(this.apiUrl+"class/searchClass",{params})
  }

  checkInsertSubject(classId: any,subjectId: any): Observable<Number>{
    let params = new HttpParams().set('classId', classId).set('subjectId',subjectId);
    return this.http.get<Number>(this.apiUrl+"student-subject/checkInsertSubject",{params});
  }

  addSubjectForClass(data: any): Observable<Number>{
    return this.http.post<Number>(this.apiUrl+"student-subject/create",data);
  }
}
