import { Component, OnInit } from '@angular/core';
import { Parent } from 'src/app/model/parent';
import { ParentService } from 'src/app/service/parent/parent.service';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {
  listParent: any="";

  constructor(private parentService: ParentService) { }

  async ngOnInit(): Promise<void> {
    await this.findAllParent();
  }
  async findAllParent(){
    await this.parentService.findAllParent().toPromise().then(res=>{
      this.listParent=res;
    })
  }
  searchParent(data: any){    
    this.parentService.searchParent(data.parentId,data.parentName).subscribe(res=>{
      this.listParent=res;
    })
  }
}
