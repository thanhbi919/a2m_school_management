import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/model/teacher';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  apiUrl: any = environment.apiUrl;
  apiHost: any = environment.apiHost;


  constructor(private httpClient: HttpClient) { }

  createTeacher(teacher: Teacher): Observable<Object> {
    return this.httpClient.post(`${this.apiUrl}teacher/create`, teacher);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<any>(`${this.apiUrl}teacher/findAll`);
  }

  getTeachersPage(pageIndex: number, pageSize: number, field: string, sort: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}teacher/list-teachers?page=${pageIndex}&size=${pageSize}&field=${field}&sort=${sort}`);
  }

  searchTeachers(keyword: string, pageIndex: number, pageSize: number, field: string, sort: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}teacher/search?keyword=${keyword}&page=${pageIndex}&size=${pageSize}&field=${field}&sort=${sort}`);
  }

  getTeacherById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}teacher/findById?id=${id}`);
  }

  deleteTeacherById(id: number): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}teacher/delete?id=${id}`, null);
  }
  totalTeacher():Observable<number>{
    return this.httpClient.get<number>(this.apiUrl+"teacher/totalTeacher");
  }

  upload(file: any,teacherId: any): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.apiUrl+"teacher/uploadFile?teacherId="+teacherId, formData,{
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }
  
  getTeacherBySubjectId(subjectId: any):Observable<Teacher[]>{
    return this.httpClient.get<Teacher[]>(this.apiUrl+"class/getTeacherBySubject?subjectId="+subjectId);
  }
}
