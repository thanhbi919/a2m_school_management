import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student/student.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listStu: any;
  @Output() updateStatus = new EventEmitter();
  pageSlice!: any;
  length: number=0;
  constructor(private stuService: StudentService) { }

  ngOnInit(): void {
    
  }
  onUpdateStatus(event: any){
    Swal.fire({
      title: 'Bạn có chắc chắn không?',
      text: "Bạn sẽ không thể hoàn tác điều này!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.stuService.updateStatus(event).subscribe(res=>{
          if (res){
            this.updateStatus.emit();
            setTimeout(() => {
              Swal.fire(
                'Cập nhật thành công !',
                'success'
              )   
            }, 1000);
           
          }
        })
        
      }
    })
  }
  ngOnChanges(): void{
    if (this.listStu != undefined){
      this.pageSlice= this.listStu.slice(0,10);
      this.length=this.listStu.length
    }
  }	
  onPageChange(event: any){
    console.log(event);
    let indexStart: number;
    if (event.pageIndex == 0){
      indexStart = 0;
    }else{
      indexStart = event.pageIndex*event.pageSize;
    }
    this.pageSlice = this.listStu.slice(indexStart,indexStart+event.pageSize);
  }

  findAllStudent(){
    this.stuService.findAllStudent().toPromise().then((result:any)=>{
      this.listStu=result;
    })
  }
}
