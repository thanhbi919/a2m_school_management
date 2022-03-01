import { Injectable,Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Account } from '../../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
apiUrl: any =environment.apiUrl;




  constructor(private httpClient: HttpClient){
    // this.header = new Headers({'Content-Type': 'application/context'})
  }
  getAllAccount(page:number,pageSize:number){
     return this.httpClient.get<any>(this.apiUrl+'account/list-users?page='+page+'&size='+pageSize);
    }

  getAccountById(id:number){
    return this.httpClient.get<any>(this.apiUrl+'account?id='+id)
  }
  findAccountByUsernameAndRole(username:string,role:string,page:number,pageSize:number){
    return this.httpClient.get<any>(this.apiUrl+'account/findUser?page='+page+'&username='+username+'&role='+role+'&size='+pageSize);
  }
  update(request:any)
  {
    return this.httpClient.post<any>(this.apiUrl+'account/updateAccount',request);
  }
  updateAll(request:any){
    return this.httpClient.post<any>(this.apiUrl+'account/updateListAccount',request)
  }
  deleteAccount(id:number){
    return this.httpClient.post<any>(this.apiUrl+'account/deleteAccount?id='+id,null)
  }

  getAllUsername(){
    return this.httpClient.get<any>(this.apiUrl+'account/findUsername');
  }
  creatNewAccount(request:Account){
    return this.httpClient.post<any>(this.apiUrl+'account/createNewAccount',request);
  }
  idNotUsed(){
    return this.httpClient.get<any>(this.apiUrl+'account/idNotUsed');
  }
  findTeacherById(id:number){
    return this.httpClient.get<any>(this.apiUrl+'account/findTeacherById?id='+id);
  }
  findIdByUsername(username:string){
    return this.httpClient.get<any>(this.apiUrl+'teacher/findId?username='+username);
  }


}


