import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
const headers = new HttpHeaders({
  'Access-Control-Allow-Origin': '*',
});
@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (request.url.includes('/login')) {
      return next.handle(request);
    }
    const token = this.tokenStorageService.getToken();
    if (token!==null) {
      let myHeaders = headers.set('Authorization', 'Bearer ' + token);
      const AuthRequest = request.clone({ headers: myHeaders });
      return next.handle(AuthRequest);
    } else {
      return next.handle(request);
    }
  }
}
