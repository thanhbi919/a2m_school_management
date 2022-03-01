import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class/class.service';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  listTeacher: any;
  constructor(
    private teacherService: TeacherService,
    private classService: ClassService,
    private form: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListTeacher()
  }

  classForm=this.form.group({
    className: ['',[Validators.required]],
    totalStu: ['',Validators.required],
    teacherId: ['',Validators.required]
  })

  get dataForm(){
    return this.classForm.controls
  }

  async obSubmitForm(){
    let c: any;
    let className=this.classForm.controls.className.value;
    await this.classService.findByClassName(className).toPromise().then(res=>{
      c=res;
      console.log(res);
    })
    if (c.length==0){
      this.classService.createClass(this.classForm.value).subscribe(async res=>{
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Thêm thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigateByUrl('a2m/class');
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tên lớp học đã tồn tại!',
      });
    }
    
  }

  getListTeacher(){
    this.classService.getListTeacher().subscribe(res=>{
      this.listTeacher=res;
    })
  }
}
