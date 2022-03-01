import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadScriptService } from 'src/app/service/common/lazy-load-script.service';
import { TokenStorageService } from '../../modules/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role:string = "Teacher"

  constructor(private loadLazyService: LazyLoadScriptService,
              private router: Router,
              private tokenStorageService :TokenStorageService) { }

  ngOnInit(): void {
    this.loadScript();
    const currentUser = this.tokenStorageService.getUser();
    this.role = currentUser.roles[0];
  }

  loadScript() {
    this.loadLazyService.loadScript('/assets/js/main.js');
  }
  logout(){
    this.tokenStorageService.signOut();
    this.router.navigateByUrl("/login");
  }

}
