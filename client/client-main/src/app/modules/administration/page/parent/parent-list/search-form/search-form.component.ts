
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() searchParent = new EventEmitter();
  dataSearch ={
    parentId: '',
    parentName: ''
  }
  constructor() { }

  ngOnInit(): void {
  }


  onSubmitSearch(event: any){
    this.searchParent.emit(this.dataSearch)
  }
}
