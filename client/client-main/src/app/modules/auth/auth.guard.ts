import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,
    private tokenStorageService:TokenStorageService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url:string = state.url;
    const currentUser = this.tokenStorageService.getUser();
    if(currentUser!==null){
      let role = currentUser.roles[0];
      if(route.data.roles.indexOf(role)===-1){
        alert("bạn không có quyền vào đây")
        return false;
      }
    }else{
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    }

    return true;
  }

}
