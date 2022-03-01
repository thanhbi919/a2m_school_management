import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';

import { StudentListRoutingModule } from './student-list-routing.module';
import { StudentListComponent } from './student-list.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    StudentListComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    StudentListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class StudentListModule { }
