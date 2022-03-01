import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../modules/auth/token-storage.service';
import { AccountService } from '../../service/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string | undefined;
  id!:number;
  role:string | undefined;
  constructor(private tokenStorageService:TokenStorageService,
    private accountService: AccountService,
    private router:Router) { }

  ngOnInit(): void {
    const currentUser = this.tokenStorageService.getUser();
    this.username =currentUser.username;
    this.role = currentUser.roles[0];
    this.accountService.findIdByUsername(this.username!).subscribe(
      response=>{
        this.id=response;
      }
    )
  }
  logout(){
    this.tokenStorageService.signOut;
    this.router.navigate(['/login'])
  }

}
