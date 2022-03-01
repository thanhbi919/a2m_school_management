import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  stu: any = "";
  stuId!: number;
  listParent: any="";
  selectedFiles!: FileList;

  constructor(private stuService: StudentService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    await this.findByStuId();
    this.stuId=this.stu.id;
    this.listParent=this.stu.listParent;
  }
  async findByStuId(){
    let stuId =this.activatedRoute.snapshot.params.id;
    await this.stuService.findByStuId(stuId).toPromise().then((res): any=>{
      this.stu=res;
    })
  }

  changeImage(event: any){
    this.selectedFiles=event.target.files;
    let file =this.selectedFiles.item(0);
    if (file){
      this.stuService.upload(file,this.stu.id).subscribe(res=>{
        if (res){
          this.findByStuId();
        }
      })
    }
    
  }
}
