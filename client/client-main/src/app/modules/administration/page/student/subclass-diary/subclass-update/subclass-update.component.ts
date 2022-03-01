import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Class1 } from 'src/app/model/class1';
import { ClassService } from 'src/app/service/class/class.service';
import { StudentService } from 'src/app/service/student/student.service';
import { SubclassDiaryService } from 'src/app/service/subclass-diary/subclass-diary.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subclass-update',
  templateUrl: './subclass-update.component.html',
  styleUrls: ['./subclass-update.component.css'],
})
export class SubclassUpdateComponent implements OnInit {
  listClass!: Class1[];
  subclassDiary: any;
  constructor(
    private form: FormBuilder,
    private stuService: StudentService,
    private router: Router,
    private classService: ClassService,
    private subclassDiaryService: SubclassDiaryService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.findSubclassDiary();
    this.findAllClass();
    this.setValueForm();
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

  setValueForm() {
    this.subclassForm.controls.stuId.setValue(this.subclassDiary.id.stuId);
    this.subclassForm.controls.classId.setValue(this.subclassDiary.id.classId);
    this.subclassForm.controls.year.setValue(this.subclassDiary.year);
    this.subclassForm.controls.status.setValue(this.subclassDiary.status);
  }

  findAllClass() {
    this.classService.findAllClass().subscribe((res) => {
      this.listClass = res;
    });
  }

  async findSubclassDiary() {
    let data: any = localStorage.getItem('subclassDiaryId');
    let id = JSON.parse(data);
    await this.subclassDiaryService
      .findByStuIdAndClassId(id)
      .toPromise()
      .then((res) => {
        this.subclassDiary = res;
      });
  }

  async onSubmit() {
    console.log(this.subclassForm.value)
    this.subclassDiaryService
      .updateSubclassDiary(this.subclassForm.value)
      .subscribe((res) => {
        setTimeout(async () => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cập nhật thành công',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigateByUrl(
            'a2m/student/detail/' + this.subclassForm.controls.stuId.value
          );
        }, 500);
    });
  }
}
