import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'src/app/model/subject';
import { Teacher } from 'src/app/model/teacher';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SubjectService } from 'src/app/service/subject/subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  FULLNAME_PATTERN =
    "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

  selected = '';
  url: any;
  selectedFiles!: FileList;
  fileInfos?: Observable<any>;
  teacherId: any;

  createFormGroup!: FormGroup;
  teacher: Teacher = new Teacher();
  subjects!: Subject[];

  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.listSubject();
    this.createForm();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  listSubject() {
    this.subjectService.findAll().subscribe(
      data => {
        this.subjects = data;
      }
    )
  }

  saveTeacher() {
    this.teacher = this.createFormGroup.get('teacher')?.value;

    if (this.selectedFiles) {
      this.teacherService.createTeacher(this.teacher).subscribe(
        data => {

          this.teacher = data;
          this.uploadFile(this.teacher.id);
          this.openSnackBar("Thêm thành công", "OK");
          this.gotoTeacherList();

        },
        error => {

          this.openSnackBar("ERROR INPUT", "OK");
        }
      );
    }
  }

  gotoTeacherList() {
    this.router.navigateByUrl(`/a2m/teacher`);
  }

  onSubmit() {


    if (this.createFormGroup.invalid) {
      this.createFormGroup.markAllAsTouched();
    } else {
      this.saveTeacher();
    }
  }

  onClickFile(event: any) {
    this.selectedFiles = event.target.files;
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
  }

  uploadFile(teacherId: any) {
    let file: File | null = this.selectedFiles.item(0);
    if (file) {
      console.log(file);
      let currentFileUpload: File = file;
      this.teacherService.upload(currentFileUpload, teacherId).subscribe((res) => { });
    }
  }

  createForm() {
    this.createFormGroup = this.formBuilder.group({
      teacher: this.formBuilder.group
        ({
          teacherName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50),
          Validators.pattern(this.FULLNAME_PATTERN)]),

          birthday: new FormControl('', [Validators.required,
          Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\\d\\d$')]),

          gender: new FormControl('', [Validators.required]),

          level: new FormControl('', [Validators.required]),

          objSubject: new FormControl('', [Validators.required]),

          graduationYear: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{4}$')]),

          address: new FormControl('', [Validators.required, Validators.minLength(5)]),

          telephone: new FormControl('', [Validators.required, Validators.pattern('^[0-9\-\+]{9,15}$')]),

          email: new FormControl('', [Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),

          workStartDate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\\d\\d$')]),

          status: new FormControl('', [Validators.required, Validators.minLength(2)]),

          avatar: new FormControl('', [Validators.required])
        })
    });
  }

  get teacherName() { return this.createFormGroup.get('teacher.teacherName'); }
  get birthday() { return this.createFormGroup.get('teacher.birthday'); }
  get gender() { return this.createFormGroup.get('teacher.gender'); }
  get level() { return this.createFormGroup.get('teacher.level'); }
  get objSubject() { return this.createFormGroup.get('teacher.objSubject'); }
  get graduationYear() { return this.createFormGroup.get('teacher.graduationYear'); }
  get address() { return this.createFormGroup.get('teacher.address'); }
  get telephone() { return this.createFormGroup.get('teacher.telephone'); }
  get email() { return this.createFormGroup.get('teacher.email'); }
  get workStartDate() { return this.createFormGroup.get('teacher.workStartDate'); }
  get status() { return this.createFormGroup.get('teacher.status'); }
  get avatar() { return this.createFormGroup.get('teacher.avatar'); }
}
