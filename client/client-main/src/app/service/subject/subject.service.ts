import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/model/subject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  
  
  apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  findAll():Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(this.apiUrl+"subject/list");
  }

  createSubject(subject: Subject): Observable<Object> {
    return this.httpClient.post(`${this.apiUrl}subject/create`, subject);
  }

  deleteSubjectById(id: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}subject/delete?id=${id}`, null);
  }

  getById(subjectId: number):  Observable<any> {
    return this.httpClient.get<any>(this.apiUrl+`subject/getById?id=${subjectId}`);
  }

  searchByName(keyword: String):Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(this.apiUrl+`subject/search?name=${keyword}`);
  }
}

