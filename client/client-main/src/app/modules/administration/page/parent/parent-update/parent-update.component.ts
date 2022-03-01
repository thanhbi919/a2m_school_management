import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Parent } from 'src/app/model/parent';
import Validation from 'src/app/model/validate/date.validator';
import { ParentService } from 'src/app/service/parent/parent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-parent-update',
  templateUrl: './parent-update.component.html',
  styleUrls: ['./parent-update.component.css'],
})
export class ParentUpdateComponent implements OnInit {
  selected = '';
  parent: any;
  constructor(
    private parentService: ParentService,
    private form: FormBuilder,
    private activated: ActivatedRoute,
    private route: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.findParentById();
    this.setValueParentForm();
  }

  async findParentById() {
    let id = this.activated.snapshot.params.id;
    await this.parentService
      .findByParentId(id)
      .toPromise()
      .then((data) => {
        this.parent = data;
      });
  }

  parentForm = this.form.group({
    id: ['', Validators.required],
    parentName: ['', [Validators.required]],
    gender: ['', Validators.required],
    birthday: ['', [Validators.required, Validation.dateValidator()]],
    email: ['', [Validators.required, Validators.email]],
    telephone: [
      '',
      [Validators.required, Validators.pattern('^(09|03|07|08|05)+[0-9]{8}$')],
    ],
    address: ['', [Validators.required]],
    status: ['', [Validators.required]],
  });

  setValueParentForm() {
    this.parentForm.controls.id.setValue(this.parent.id);
    this.parentForm.controls.parentName.setValue(this.parent.parentName);
    this.parentForm.controls.gender.setValue(this.parent.gender);
    this.parentForm.controls.birthday.setValue(this.parent.birthday);
    this.parentForm.controls.email.setValue(this.parent.email);
    this.parentForm.controls.telephone.setValue(this.parent.telephone);
    this.parentForm.controls.address.setValue(this.parent.address);
    this.parentForm.controls.status.setValue(this.parent.status);
  }

  get dataParentForm() {
    return this.parentForm.controls;
  }

  obSubmitFormParent() {
    this.parentService
      .updateParent(this.parentForm.value)
      .toPromise()
      .then(async (res) => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cập nhật thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        this.route.navigateByUrl('a2m/parent');
      });
  }

  // onClickFile(event: any) {
  //   this.selectedFiles = event.target.files;

  //   // console.log(this.selectedFiles)
  //   let file = this.selectedFiles.item(0);

  //   if (file) {
  //     this.parentForm.controls.multipartFile.setValue(file);
  //     // console.log(this.parentForm.controls.multipartFile.value)
  //     if (event.target.files) {
  //       var reader = new FileReader();
  //       reader.readAsDataURL(event.target.files[0]);
  //       reader.onload = (e: any) => {
  //         this.url = e.target.result;
  //       };
  //     }
  //   }
  // }
}
