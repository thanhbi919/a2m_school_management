import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  teachers!: Teacher[];
  searchMode!: boolean;

  pageEvent: PageEvent = new PageEvent();
  pageSize!: number;
  length!: number;
  field: string = 'id';
  sort: string = 'ASC';

  constructor(
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private teacherService: TeacherService) {
    this.pageEvent.pageSize = 10;
    this.pageEvent.pageIndex = 0;
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listTeachers();
    });
  }

  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  listTeachers() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearch(0, this.pageEvent.pageSize);
    }
    else {
      this.handleList(0, this.pageEvent.pageSize);
    }
  }

  handleSearch(pageIndex: number, pageSize: number) {
    const keyword: string = String(this.route.snapshot.paramMap.get('keyword'));
    this.teacherService.searchTeachers(keyword, pageIndex, pageSize, this.field, this.sort).subscribe(
      data => {
        //debugger
        this.teachers = data['content'];
        this.length = data['totalElements'];
        this.pageSize = data['size']
      }
    )
  }

  handleList(pageIndex: number, pageSize: number) {
    this.teacherService.getTeachersPage(pageIndex, pageSize, this.field, this.sort).subscribe(
      data => {
        this.teachers = data['content'];
        this.length = data['totalElements'];
        this.pageSize = data['size']
      }
    )
  }

  paginationHandle() {
    if (this.searchMode) {
      this.handleSearch(
        this.pageEvent.pageIndex, this.pageEvent.pageSize
      )
    } else {
      this.handleList(
        this.pageEvent.pageIndex, this.pageEvent.pageSize
      )
    }
  }

  fieldPaginationHandle(field: string, sort: string) {
    this.field = field;
    this.sort = sort;
    if (this.searchMode) {
      this.handleSearch(
        this.pageEvent.pageIndex, this.pageEvent.pageSize
      )
    } else {
      this.handleList(
        this.pageEvent.pageIndex, this.pageEvent.pageSize
      )
    }
  }

  deleteTeacher(teacherId: any) {

    Swal.fire({
      title: 'Chắc chắn?',
      text: "Hành động này không thể khôi phục!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.teacherService.deleteTeacherById(teacherId).subscribe(
          data => {
            this.openSnackBar("Xoá thành công", "OK");
            
            this.listTeachers();
          },
          error => {
            this.openSnackBar("Thất bại!...", "OK");
            
          }
        );
        
      }
    })

    
  }
}
