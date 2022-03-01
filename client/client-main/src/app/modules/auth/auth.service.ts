import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn!:boolean;
  apiUrl: any =environment.apiUrl;
  constructor(private httpClient:HttpClient) {
   }
  login(request:any):Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+'login',{
      username:request.username,
      password :request.password}
      ).pipe(catchError(this.handleError))
  }
  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    console.log('Error', errorMessage);
    return throwError(errorMessage);
  }
}
