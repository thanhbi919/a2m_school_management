import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parent } from 'src/app/model/parent';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  apiUrl: any =environment.apiUrl;
  apiHost: any =environment.apiHost;

  constructor(private http: HttpClient) { }

  findAllParent():Observable<Parent[]>{
    return this.http.get<Parent[]>(this.apiUrl+"parent/findAll");
  }

  createParent(parent: any, stuId: any):Observable<any>{
    let params = new HttpParams().set('stuId',stuId);
    return this.http.post<any>(this.apiUrl+"parent/create",parent,{params});
  }

  findByParentId(id: any):Observable<Parent>{
    return this.http.get<Parent>(this.apiUrl+"parent/findById/"+id);
  }

  searchParent(parentId: any, parentName: any):Observable<any>{
    let params = new HttpParams()
      .set('parentId',parentId)
      .set('parentName',parentName);
    return this.http.get<any>(this.apiUrl+"parent/search",{params});
  }

  updateParent(parent: any):Observable<Parent>{
    return this.http.put<Parent>(this.apiUrl+"parent/update",parent);
  }

  deleteParent(id: any):Observable<any>{
    let params = new HttpParams().set('id',id);
    return this.http.delete<any>(this.apiUrl+"parent/delete",{params});
  }

  totalParent():Observable<number>{
    return this.http.get<number>(this.apiUrl+"parent/totalParent");
  }

  upload(file: any,parentId: any): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.apiUrl+"parent/uploadFile?parentId="+parentId, formData,{
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
