import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {

  @Input() stu: any;
  @Output() changeImage = new EventEmitter();
  apiHost: any;

  constructor(private stuService: StudentService) { }

  ngOnInit(): void {
    this.apiHost=this.stuService.apiHost;
  }

  ngOnChanges(): void {

  }
  onChangeImage(event: any){
    this.changeImage.emit(event);
    
  }
}
