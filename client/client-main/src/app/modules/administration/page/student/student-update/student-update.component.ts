import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  selected = '';
  selected2 ='';
  stu!: Student;
  constructor(private form: FormBuilder, 
    private stuService: StudentService, 
    private router: Router,
    private activated: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    await this.findStuById();
    this.setValueFormStu();
  }
  stuForm = this.form.group({
    id:['',[Validators.required]],
    stuName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    birthday: ['', [Validators.required]],
    admissionDate: ['', [Validators.required]],
    address: ['', [Validators.required]],
    status: ['',[Validators.required]]
  });

  get dataForm() {
    return this.stuForm.controls;
  }

  async findStuById(){
    let id =this.activated.snapshot.params.id;
    await this.stuService.findByStuId(id).toPromise().then(res=>{
      this.stu=res;
    })
  }

  setValueFormStu(){
    this.stuForm.controls.id.setValue(this.stu.id);
    this.stuForm.controls.stuName.setValue(this.stu.stuName);
    this.stuForm.controls.gender.setValue(this.stu.gender);
    this.stuForm.controls.birthday.setValue(this.stu.birthday);
    this.stuForm.controls.admissionDate.setValue(this.stu.admissionDate);
    this.stuForm.controls.address.setValue(this.stu.address);
    this.stuForm.controls.status.setValue(this.stu.status);
  }
  onSubmit() {
    this.stuService.updateStudent(this.stuForm.value).toPromise().then(async (res) => {
      await setTimeout(async () => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cập nhật thành công',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("a2m/student");
      }, 500)
    });
  }
}
