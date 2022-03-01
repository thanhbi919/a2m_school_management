import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student/student.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-subject-student',
  templateUrl: './subject-student.component.html',
  styleUrls: ['./subject-student.component.css']
})
export class SubjectStudentComponent implements OnInit {
  listSub: any="";

  constructor(private stuService: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.findAllSubStudent();
  }

  findAllSubStudent(){
    let stuId =this.activatedRoute.snapshot.params.id;
    this.stuService.findSubjectByClass(stuId).subscribe(res=>{
      this.listSub=res;
    }) 
  }
  // onDeleteSubject(event: any){
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.stuService.deleteSubjectForStu(event).toPromise().then(async res=>{
  //         await Swal.fire(
  //           'Deleted!',
  //           'Your file has been deleted.',
  //           'success'
  //         );
  //         this.findAllSubStudent();
  //       })
        
  //     }
  //   })
  // }

  // async obSubmitUpdate(event: any){
  //   let data: any ={
  //     stuId: event.id.stuId,
  //     subjectId: event.id.subjectId,
  //     teacherId: event.objTeacher.id,
  //     subjectName: event.objSubject.subjectName
  //   };
  //   localStorage.setItem('subForStu',JSON.stringify(data));
  //   this.router.navigateByUrl("a2m/student/subject/update");
    
  // }
}


