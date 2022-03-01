import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/service/class/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  listClass: any;
  pageSlice: any;
  length: any;
  classId: any="";
  className: String="";
  constructor(private classService: ClassService) { }

  async ngOnInit(): Promise<void> {
    await this.findAllClass();
    this.length=this.listClass.length;
    this.pageSlice= this.listClass.slice(0,9);
  }

  async findAllClass(){
    await this.classService.findAllClass().toPromise().then(res=>{
      this.listClass=res;
    })
  }

  onPageChange(event: any){
    let indexStart: number;
    if (event.pageIndex == 0){
      indexStart = 0;
    }else{
      indexStart = event.pageIndex*event.pageSize;
    }
    this.pageSlice = this.listClass.slice(indexStart,indexStart+event.pageSize);
  }

  onSubmitSearch(){
    this.classService.searchClass(this.classId,this.className).subscribe(res=>{
      this.listClass=res;
      this.length=this.listClass.length;
      this.pageSlice= this.listClass.slice(0,9);
    })
  }
}
