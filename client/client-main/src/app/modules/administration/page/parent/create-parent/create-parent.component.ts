import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { Student } from 'src/app/model/student';
import { ParentService } from 'src/app/service/parent/parent.service';
import { StudentService } from 'src/app/service/student/student.service';
import { Router } from '@angular/router';
import Validation from 'src/app/model/validate/date.validator';

declare var $: any;

@Component({
  selector: 'app-create-parent',
  templateUrl: './create-parent.component.html',
  styleUrls: ['./create-parent.component.css'],
})
export class CreateParentComponent implements OnInit {
  selected = '';
  url: any;
  selectedFiles!: FileList;

  fileInfos?: Observable<any>;
  constructor(
    private parentService: ParentService,
    private form: FormBuilder,
    private stuService: StudentService,
    private route: Router
  ) {}

  ngOnInit(): void {
    
    
  }

  parentForm = this.form.group({
    stuId: ['', [Validators.required, Validators.pattern('[0-9]{0,20}')]],
    parentName: ['', [Validators.required]],
    gender: ['', Validators.required],
    birthday: ['', [Validators.required, Validation.dateValidator()]],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', [Validators.required,Validators.pattern('^(09|03|07|08|05)+[0-9]{8}$')]],
    address: ['', [Validators.required]],   
    multipartFile: ['', [Validators.required]],
  });
  get dataParentForm() {
    return this.parentForm.controls;
  }
  async obSubmitFormParent() {
    let stuId = this.parentForm.get('stuId')?.value;
    let stu!: Student;
    await this.stuService
      .findByStuId(stuId)
      .toPromise()
      .then((data) => {
        stu = data;
      });
    if (stu != null) {
      let p: any;
      await this.parentService
        .createParent(this.parentForm.value, stuId)
        .toPromise()
        .then((res) => {
          p = res;
        });
      this.parentService
        .upload(this.selectedFiles.item(0), p.id)
        .toPromise()
        .then(async (res) => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm thành công',
            showConfirmButton: false,
            timer: 1500,
          });
          this.route.navigateByUrl('a2m/parent');
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Mã sinh viên không tồn tại!',
      });
    }
  }
  onClickFile(event: any) {
    this.selectedFiles = event.target.files;
    let file = this.selectedFiles.item(0)
    if (file){
      this.parentForm.controls.multipartFile.setValue(file);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
  }
  uploadFile() {
    let file: File | null = this.selectedFiles.item(0);
    if (file) {
      console.log(file);
      let currentFileUpload: File = file;
      this.parentService.upload(currentFileUpload, 1).subscribe((res) => {});
    }
  }
}
