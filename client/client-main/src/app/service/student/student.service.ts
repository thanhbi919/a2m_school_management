import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student';
import { Subject } from 'src/app/model/subject';
import { Teacher } from 'src/app/model/teacher';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl: any = environment.apiUrl;
  apiHost: any = environment.apiHost;
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  findAllStudent(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'student/findAll');
  }

  saveStu(stu: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl + 'student/create', stu);
  }

  findByStuId(stuId: any): Observable<Student> {
    return this.http.get<Student>(this.apiUrl + 'student/findById/' + stuId);
  }

  updateStatus(stuId: any): Observable<Boolean> {
    return this.http.get<Boolean>(
      this.apiUrl + 'student/updateStatus/' + stuId
    );
  }

  searchStudent(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'student/search', data);
  }

  updateStudent(stu: any): Observable<Student> {
    return this.http.put(this.apiUrl + 'student/update', stu);
  }

  insertSubclassDiary(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'student/subclass', data);
  }

  getTeacherBySubjectId(id: any): Observable<Teacher[]> {
    let params = new HttpParams().set('subjectId', id);
    return this.http.get<Teacher[]>(
      this.apiUrl + 'student/findTeacherBySubjectId',
      { params }
    );
  }

  getTotalStudent(): Observable<Number> {
    return this.http.get<number>(this.apiUrl + 'student/totalStudent');
  }

  findSubjectByClass(stuId: any):Observable<any>{
    let params = new HttpParams().set('stuId', stuId);
    return this.http.get<any>(this.apiUrl+"student-subject/findSubjectByClass",{params});
  }

  findNewStudent():Observable<any>{
    return this.http.get<any>(this.apiUrl+"student/findNewStudent");
  }

  findNewTeacher():Observable<any>{
    return this.http.get<any>(this.apiUrl+"student/findNewTeacher");
  }

  upload(file: File,stuId: any): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.apiUrl+"student/uploadFile?stuId="+stuId, formData,{
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
