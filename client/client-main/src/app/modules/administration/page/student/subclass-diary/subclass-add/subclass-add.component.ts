import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Class1 } from 'src/app/model/class1';
import { ClassService } from 'src/app/service/class/class.service';
import { StudentService } from 'src/app/service/student/student.service';
import { SubclassDiaryService } from 'src/app/service/subclass-diary/subclass-diary.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subclass-add',
  templateUrl: './subclass-add.component.html',
  styleUrls: ['./subclass-add.component.css'],
})
export class SubclassAddComponent implements OnInit {
  selected2 = '';
  listClass!: Class1[];
  constructor(
    private form: FormBuilder,
    private stuService: StudentService,
    private router: Router,
    private classService: ClassService,
    private subclassDiaryService: SubclassDiaryService
  ) {}

  ngOnInit(): void {
    this.findAllClass();
  }

  subclassForm = this.form.group({
    stuId: ['', [Validators.required]],
    classId: ['', [Validators.required]],
    year: ['', [Validators.required,Validators.pattern("^[0-9]+-[0-9]+$")]],
    status: ['', [Validators.required]],
  });

  get dataSubclassForm() {
    return this.subclassForm.controls;
  }

  findAllClass() {
    this.classService.findAllClass().subscribe((res) => {
      this.listClass = res;
    });
  }

  async onSubmit() {
    let stu: any;
    await this.stuService
      .findByStuId(this.subclassForm.controls.stuId.value)
      .toPromise()
      .then((res) => {
        stu = res;
       
      });
    if (stu != null) {
      let data: any = {
        classId: this.subclassForm.controls.classId.value,
        stuId: this.subclassForm.controls.stuId.value,
      };
      let check: any;
      await this.subclassDiaryService
        .findByStuIdAndClassId(data)
        .toPromise()
        .then((res) => {
          check = res;
          console.log(res);
        });
      if (check == null) {  
        this.stuService
          .insertSubclassDiary(this.subclassForm.value)
          .subscribe((res) => {
            if (res){
              setTimeout(async () => {
                await Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Thêm thành công',
                  showConfirmButton: false,
                  timer: 1000
                });
                this.router.navigateByUrl("a2m/student/detail/"+this.subclassForm.controls.stuId.value);
              }, 1500);
            }
          });
      } else {
        check = false;
        Swal.fire({
          icon: 'error',
          text: 'Nhật ký lớp học đã tồn tại!',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Mã sinh viên không tồn tại!',
      });
    }
  }
}
