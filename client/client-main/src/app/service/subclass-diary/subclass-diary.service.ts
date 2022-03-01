import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubclassDiaryService {
  apiUrl=environment.apiUrl;

  constructor(private http: HttpClient) { }

  deleteSubclassDiary(data: any):Observable<number>{
    let params = new HttpParams()
      .set('stuId', data.stuId)
      .set('classId', data.classId);
    return this.http.delete<number>(this.apiUrl+"subclass-diary",{params})
  }
  
  updateSubclassDiary(data: any):Observable<number>{
    return this.http.put<number>(this.apiUrl+"subclass-diary",data);
  }
  findSubclassByStuId(stuId: any):Observable<any>{
    let params = new HttpParams()
      .set('stuId', stuId);
    return this.http.get<number>(this.apiUrl+"subclass-diary",{params})
  }

  findByStuIdAndClassId(data: any):Observable<any>{
    let params = new HttpParams()
      .set('stuId', data.stuId)
      .set('classId',data.classId);
    return this.http.get<number>(this.apiUrl+"subclass-diary/findByStuIdAndClassId",{params})
  }

  countStudentByClassId(classId: any):Observable<number>{
    let params = new HttpParams()
      .set('classId',classId);
      return this.http.get<number>(this.apiUrl+"subclass-diary/countStudentByClassId",{params})
  }
}
