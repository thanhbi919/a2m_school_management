import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClassService } from 'src/app/service/class/class.service';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() dataSearch = new EventEmitter();
  listClass: any;
  dataSearchStu: any = {
    classId: "",
    stuId: null,
    stuName: '',
  };
  
  constructor(private form: FormBuilder, 
    private stuService: StudentService,
    private classService: ClassService) {}

  ngOnInit(): void {
    this.findAllClass();
  }
  
  obSubmitSearch() {
    this.dataSearch.emit(this.dataSearchStu);
  }

  findAllClass(){
    this.classService.findAllClass().subscribe(res=>{
      this.listClass=res;
    })
  }
}
