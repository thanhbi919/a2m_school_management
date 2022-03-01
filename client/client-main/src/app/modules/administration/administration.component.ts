import { Component, OnInit } from '@angular/core';
import { LazyLoadScriptService } from 'src/app/service/common/lazy-load-script.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
