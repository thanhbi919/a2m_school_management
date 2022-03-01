import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  teacher!: any;
  students!: any;
  url: any;
  apiHost: any;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private teacherService: TeacherService,
    private route: ActivatedRoute) {
      this.teacher = new Teacher();
    }

  ngOnInit(): void {
    this.apiHost=this.teacherService.apiHost;
    this.getTeacher();
  }
  getTeacher(){
    const teacherId:number = Number(this.route.snapshot.paramMap.get('id'));
    this.teacherService.getTeacherById(teacherId).subscribe(
      data => {
        this.teacher = data;
      }
    )
  }

  deleteTeacher(teacherId: any) {
    this.teacherService.deleteTeacherById(teacherId).subscribe(
      data => {
        this.openSnackBar("Xoá thành công", "OK");
        this.gotoTeacherList();
      },
      error => {
        this.openSnackBar("Thất bại!...", "OK");

      }
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  gotoTeacherList() {
    this.router.navigateByUrl(`/a2m/teacher`)
  }

}
