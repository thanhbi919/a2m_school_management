import { Component, Input, OnInit } from '@angular/core';
import { Parent } from 'src/app/model/parent';
import { ParentService } from 'src/app/service/parent/parent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  
  @Input() listParent: any;
  pageSlice!: any;
  length: number=0;
  
  constructor(private parentService: ParentService) {}

  ngOnInit(): void {
  }
  onClikDeleteParent(event: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.parentService.deleteParent(event).toPromise().then(res=>{
          
        })
        Swal.fire('Xóa thành công !', 'success');
      }
    });
  }
  ngOnChanges(): void{
    if (this.listParent != undefined){
      this.pageSlice= this.listParent.slice(0,9);
      this.length=this.listParent.length
    }
  }
  onPageChange(event: any){
    let indexStart: number;
    if (event.pageIndex == 0){
      indexStart = 0;
    }else{
      indexStart = event.pageIndex*event.pageSize;
    }
    this.pageSlice = this.listParent.slice(indexStart,indexStart+event.pageSize);
  }
}
