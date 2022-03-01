import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { TokenStorageService } from '../token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formLogin!:FormGroup;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private tokenStorageService:TokenStorageService) { }

  roles:string[] = []
  username:string='';
  password:string ='';

  ngOnInit(): void {
    const currentUser = this.tokenStorageService.getUser();
    if(currentUser!== null ){
      this.router.navigateByUrl("/a2m/dashboard");
    }
    this.formLogin = new FormGroup(
    {
      username:new FormControl('',Validators.required ),
      password:new FormControl('', Validators.required),
    }
    )

  }

  login(){
    this.authService.login(this.formLogin.value).subscribe(
      data=>{
        // if (this.formLogin.value.remember_me) {
          this.tokenStorageService.saveTokenLocal(data.token);
          this.tokenStorageService.saveUserLocal(data);
        // } else {
        //   console.log("ahihi")
        //   this.tokenStorageService.saveTokenSession(data.token);
        //   this.tokenStorageService.saveUserLocal(data);
        // }
        this.authService.isLoggedIn = true;
       if( this.tokenStorageService.getToken()=="") {
         alert('Tài khoản của bạn chưa được kích hoạt!')
         this.formLogin.reset();
         this.tokenStorageService.signOut();
         this.router.navigateByUrl("/");
       }else{
        this.username= this.tokenStorageService.getUser().username;
        this.roles= this.tokenStorageService.getUser().roles;
        this.formLogin.reset();
        window.location.href ='a2m/dashboard';
      }
      },
     ( error:HttpErrorResponse) =>{
       console.log(error)
        this.authService.isLoggedIn=false;
        this.router.navigateByUrl("/")
        alert("Đăng nhập thất bại");
        this.formLogin.reset();
      }
    )
  }

}
export class LoginRequest{
  constructor(
    username:string,
    password:string,
  ){}

}
