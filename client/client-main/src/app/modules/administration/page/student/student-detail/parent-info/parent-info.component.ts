import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-parent-info',
  templateUrl: './parent-info.component.html',
  styleUrls: ['./parent-info.component.css']
})
export class ParentInfoComponent implements OnInit {

  @Input() listParent: any;
  apiHost: any;

  constructor(private stuService: StudentService) { }

  ngOnInit(): void {
    this.apiHost=this.stuService.apiHost;
  }
  ngOnChanges(): void{

  }
}
