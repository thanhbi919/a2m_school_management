import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/model/subject';
import { SubjectService } from 'src/app/service/subject/subject.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  newSubject: Subject = new Subject();
  subjectError: Subject = new Subject();

  constructor(
    private form: FormBuilder,
    private router: Router,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.subForm.invalid) {
      this.subForm.markAllAsTouched();
    } else {
      this.createSubject();
    }
  }

  createSubject(){
    this.subjectService.createSubject(this.subForm.value).subscribe(
      data => {
        this.gotoTeacherList();
      },
      error => {
        this.subjectError = error["error"];
      }
    )
  }
  gotoTeacherList(){
    this.router.navigateByUrl(`/a2m/subject`);
  }

  subForm = this.form.group({
    subjectName: ['', [Validators.required]],
    status: ['', [Validators.required]]  
  });

  get dataForm() {
    return this.subForm.controls;
  }
}
