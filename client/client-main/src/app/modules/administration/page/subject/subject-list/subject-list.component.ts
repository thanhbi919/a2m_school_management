import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject/subject.service';
import Swal from 'sweetalert2'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects! : Subject[];

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.handleList();
  }

  handleList() {
    this.subjectService.findAll().subscribe(
      data => {
        this.subjects = data;
      }
    )
  }

  doSearch(keyword: any){
    this.subjectService.searchByName(keyword).subscribe(
      data => {
        this.subjects = data;
      }
    )
  }

  onUpdate(subjectId: any){
    this.router.navigateByUrl(`/a2m/subject/update/${subjectId}`);
  }

  onDelete(subjectId: any) {
    Swal.fire({
      title: 'Chắc chắc xoá?',
      text: "Hành động này không thể khôi phục!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subjectService.deleteSubjectById(subjectId).subscribe(
          data => {
            this.openSnackBar("Xoá thành công", "OK");
            
            this.ngOnInit();
          },
          error => {
            this.openSnackBar("Thất bại!...", "OK");
            
          }
        );
        
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
