import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcub',
  templateUrl: './breadcub.component.html',
  styleUrls: ['./breadcub.component.css']
})
export class BreadcubComponent implements OnInit {
  @Input() title="";
  @Input() currentPage="";
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
