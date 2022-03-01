import { Component, OnInit } from '@angular/core';
import { ParentService } from 'src/app/service/parent/parent.service';
import { StudentService } from 'src/app/service/student/student.service';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import { TokenStorageService } from '../../../../auth/token-storage.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  totalStu!: number;
  totalTeacher!: number;
  totalParent!:number;
  listStu: any="";
  listTeacher: any="";
  role:String = 'Teacher';
  constructor(private stuService: StudentService,
    private parentService: ParentService,
    private teacherService: TeacherService,
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getTotalParent();
    this.getTotalStu();
    this.getTotalTeacher();
    this.getNewStudent();
    this.getNewTeacher();
    const currentUser = this.tokenStorageService.getUser();
    this.role = currentUser.roles[0];
  }
  getTotalStu(){
    this.stuService.getTotalStudent().subscribe((res: any)=>{
      this.totalStu=res;
    })
  }
  getTotalTeacher(){
    this.teacherService.totalTeacher().subscribe((res: any)=>{
      this.totalTeacher=res;
    })
  }
  getTotalParent(){
    this.parentService.totalParent().subscribe((res: any)=>{
      this.totalParent=res;

    })
  }

  getNewStudent(){
    this.stuService.findNewStudent().subscribe(res=>{
      this.listStu=res;
    })
  }

  getNewTeacher(){
    this.stuService.findNewTeacher().subscribe(res=>{
      this.listTeacher=res;
    })
  }
}
