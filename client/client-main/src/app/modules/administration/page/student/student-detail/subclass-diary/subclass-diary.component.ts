import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubclassDiaryService } from 'src/app/service/subclass-diary/subclass-diary.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-subclass-diary',
  templateUrl: './subclass-diary.component.html',
  styleUrls: ['./subclass-diary.component.css']
})
export class SubclassDiaryComponent implements OnInit {
  
  @Input() stuId: any;
  listSubclassDiary: any="";
  constructor(private subclasDiaryService: SubclassDiaryService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    if (this.stuId != null){
      this.findSubclassDiaryByStuId();
    }
  }

  findSubclassDiaryByStuId(){
    this.subclasDiaryService.findSubclassByStuId(this.stuId).subscribe(res=>{
      this.listSubclassDiary=res;
    })
  }

  obSubmitDelete(event: any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.subclasDiaryService.deleteSubclassDiary(event).subscribe(async res=>{
          await Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          this.findSubclassDiaryByStuId();
        }) 
      }
    })
    
  }

  obSubmitUpdate(event: any){
    localStorage.setItem('subclassDiaryId',JSON.stringify(event));
    this.router.navigateByUrl("a2m/student/subclass/update");
  }
}
