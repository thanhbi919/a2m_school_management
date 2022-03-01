import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/model/teacher';
import { ClassService } from 'src/app/service/class/class.service';
import { SubjectService } from 'src/app/service/subject/subject.service';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-add-subject',
  templateUrl: './class-add-subject.component.html',
  styleUrls: ['./class-add-subject.component.css']
})
export class ClassAddSubjectComponent implements OnInit {
  listClass: any;
  listTeacher!: Teacher[];
  listSubject: any;
  constructor(private form: FormBuilder,
    private classService: ClassService,
    private subjectService: SubjectService,
    private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAllClass();
    this.findAllSubject();
  }

  classForm=this.form.group({
    classId: ['',[Validators.required]],
    teacherId: ['',[Validators.required]],
    subjectId: ['',[Validators.required]]
  });

  get dataForm(){
    return this.classForm.controls;
  }

  findAllClass(){
    this.classService.findAllClass().subscribe(res=>{
      this.listClass=res;
    })
  }

  findAllSubject(){
    this.subjectService.findAll().subscribe(res=>{
      this.listSubject=res;
    })
  }

  findAllTeacher(){
    let subjectId =this.classForm.controls.subjectId.value;
    if (subjectId !=undefined){
      this.classForm.controls.teacherId.setValue('');
      this.teacherService.getTeacherBySubjectId(subjectId).subscribe(res=>{
        this.listTeacher=res;
      })
    }
    
  }

  async obSubmitForm(){
    let subjectId =this.classForm.controls.subjectId.value;
    let classId=this.classForm.controls.classId.value;
    let n=0;
    await this.classService.checkInsertSubject(classId,subjectId).toPromise().then((res: any)=>{
      n=res;
    })
    if (n!= 0){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Môn học đã tồn tại!',
      });
    }else{
      this.classService.addSubjectForClass(this.classForm.value).subscribe(async res=>{
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('a2m/parent');
      })
    }
  }
}
