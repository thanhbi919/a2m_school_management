import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/service/class/class.service';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-class-update',
  templateUrl: './class-update.component.html',
  styleUrls: ['./class-update.component.css']
})
export class ClassUpdateComponent implements OnInit {

  listTeacher: any;
  class: any;

  constructor(private teacherService: TeacherService,
    private classService: ClassService,
    private form: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    await this.getListTeacher();
    await this.findClassById();
    this.listTeacher.push(this.class.objTeacher);
    this.setValueForm();
  }

  classForm=this.form.group({
    id: ['',[Validators.required]],
    className: ['',[Validators.required]],
    totalStu: ['',Validators.required],
    teacherId: ['',Validators.required]
  })

  get dataForm(){
    return this.classForm.controls
  }

  setValueForm(){
    this.classForm.controls.id.setValue(this.class.id);
    this.classForm.controls.className.setValue(this.class.className);
    this.classForm.controls.totalStu.setValue(this.class.totalStu);
    this.classForm.controls.teacherId.setValue(this.class.objTeacher.id);
  }

  async obSubmitForm(){
    let c: any;
    let className=this.classForm.controls.className.value;
    if (className != this.class.className){
      await this.classService.findByClassName(className).toPromise().then(res=>{
        c=res;
      })
    }
    
    if (c==null){
      this.classService.updateClass(this.classForm.value).subscribe(async res=>{
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cập thành công',
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

  async findClassById(){
    let id= this.activatedRoute.snapshot.params.id;
    await this.classService.findByClassId(id).toPromise().then(res=>{
      this.class=res;
    })
  }

  async getListTeacher(){
    await this.classService.getListTeacher().toPromise().then(res=>{
      this.listTeacher=res;
    })
  }
}
