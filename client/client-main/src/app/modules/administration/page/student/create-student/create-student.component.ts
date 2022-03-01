import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Class1 } from 'src/app/model/class1';
import Validation from 'src/app/model/validate/date.validator';
import { ClassService } from 'src/app/service/class/class.service';
import { StudentService } from 'src/app/service/student/student.service';
import { SubclassDiaryService } from 'src/app/service/subclass-diary/subclass-diary.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  selected = '';
  listClass!: Class1[];
  url: any;
  selectedFiles!: FileList;
  constructor(private form: FormBuilder, 
    private stuService: StudentService, 
    private router: Router,
    private classService: ClassService,
    private subClassDiaryService: SubclassDiaryService) {}

  ngOnInit(): void {
    this.findAllClass();
  }

  stuForm = this.form.group({
    stuName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    birthday: ['', [Validators.required,Validation.dateValidator()]],
    admissionDate: ['', [Validators.required]],
    classId: ['', [Validators.required]],
    year: ['', [Validators.required,Validators.pattern("^[0-9]+-[0-9]+$")]],
    address: ['', [Validators.required]],
    multipartFile: ['',[Validators.required]]
  },{
    validators: [Validation.match('birthday', 'admissionDate')]
  });
  
  get dataForm() {
    return this.stuForm.controls;
  }

  findAllClass(){
    this.classService.findAllClass().subscribe(res=>{
      this.listClass=res;
    })
  }

  async onSubmit() {  
    let s: any;
    let classId =this.stuForm.controls.classId.value;
    let count: any;
    
    
    await this.subClassDiaryService.countStudentByClassId(classId).toPromise().then(res=>{
      count=res;
    });
    let c: any = this.listClass.filter(function (item: any) {
        return item.id == classId;
    })
    if (c[0].totalStu < count){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Lớp đã đủ sĩ số tồn tại!',
      });
    }else{
      await this.stuService.saveStu(this.stuForm.value).toPromise().then((res:any) => {
        s=res;
      });
      this.stuService.upload(this.stuForm.controls.multipartFile.value,s.id).toPromise().then(res=>{
        setTimeout(async () => {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thêm thành công',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("a2m/student");
        }, 500);
      })
    }
    
  }
  
  onClickFile(event: any) {
    this.selectedFiles = event.target.files;
    let file = this.selectedFiles.item(0)
    if (file){
      this.stuForm.controls.multipartFile.setValue(file);
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      };
    }
    
  }
}


