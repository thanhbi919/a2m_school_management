import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { TeacherService } from 'src/app/service/teacher/teacher.service';
import { Account } from '../../../../../model/account';
import { AccountService } from '../../../../../service/account/account.service';
import { Teacher } from '../../../../../model/teacher';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  form!:FormGroup
  listTeacherId:number[]= [];
  listTeachers!: TeacherDto[];
  account :Account = {
    id: 0,
    username: '',
    password: '',
    status: 0,
    listRole: [
      {
        id: 0,
        name: ''
      }
    ],
    teacherId: 0
  }
  constructor(private accountService :AccountService,) {}

  ngOnInit(): void {
    this.accountService.idNotUsed().subscribe(
      reponse=>{
        this.listTeachers=reponse;
      }
    )
    this.form = new FormGroup({
      username: new FormControl(
        '',[Validators.required]
      ),
      password: new FormControl(
        '',[Validators.required]),
      role: new FormControl(
        '',[Validators.required]
      ),
      status: new FormControl(
        '',[Validators.required]
      ),
      teacherId:new FormControl(
        '',[Validators.required])
    })
  }
  onSubmit(){
    this.account.listRole[0].name= this.form.value.role;
    if(this.form.value.role=='Teacher'){
      this.account.listRole[0].id=2;
    }else{
      this.account.listRole[0].id =1;
    }
    this.account.username= this.form.value.username;
    this.account.status=this.form.value.status;
    this.account.password= this.form.value.password;
    this.account.teacherId=this.form.value.teacherId;
    if(!this.form.invalid){
      this.accountService.creatNewAccount(this.account).subscribe(
     response=>{
         alert("cập nhật thành công");
         this.ngOnInit()
         this.form.reset();
     },
     (error:HttpErrorResponse)=>{
          if(error.status==200){
            alert("cập nhật thành công");
            this.ngOnInit()
            this.form.reset();
          }else{
           alert("Cập nhật không thành công do "+error.error.message);
           this.ngOnInit();
          }
         }
   )}else{
     this.form.markAllAsTouched();
   }

  }
}
export class TeacherDto{
  constructor(public teacher_name:string,
    public id:number){

    }
}
