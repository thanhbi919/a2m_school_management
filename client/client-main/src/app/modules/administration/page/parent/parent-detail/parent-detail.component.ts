import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentService } from 'src/app/service/parent/parent.service';

@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.css'],
})
export class ParentDetailComponent implements OnInit {
  parent: any="";
  selectedFiles!: FileList;
  apiHost: any;
  constructor(
    private parentService: ParentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getParentById();
    this.apiHost=this.parentService.apiHost;
  }
  getParentById() {
    let parentId = this.activatedRoute.snapshot.params.id;
    this.parentService.findByParentId(parentId).subscribe((data) => {
      this.parent = data;
    });
  }

  obSumitRouter(){
    this.router.navigateByUrl("a2m/parent/update/"+this.activatedRoute.snapshot.params.id);
  }

  onChangeImage(event: any){
    this.selectedFiles = event.target.files;
    let file = this.selectedFiles.item(0);
    if (file){
      this.parentService.upload( file,this.parent.id).subscribe(res=>{
        if (res){
          this.getParentById();
        }
      })
    }
  }
}
