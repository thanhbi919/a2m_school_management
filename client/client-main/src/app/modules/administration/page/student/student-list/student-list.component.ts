import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listStu: any=""; 
  constructor(private stuService: StudentService) { }

  ngOnInit(): void {
    this.findAllStudent();
  }
  
  findAllStudent(){
    this.stuService.findAllStudent().subscribe((result:any)=>{
      this.listStu=result;
    })
  }

  dataSearch(data: any){ 
    this.stuService.searchStudent(data).subscribe(res=>{
      this.listStu=res
    })
  }

  updateStatus(event: any){
    this.findAllStudent();
  }
}
