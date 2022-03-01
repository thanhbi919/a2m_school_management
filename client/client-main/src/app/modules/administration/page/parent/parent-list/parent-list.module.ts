import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ParentListRoutingModule } from './parent-list-routing.module';
import { ParentListComponent } from './parent-list.component';

import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ParentListComponent,
    ListComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    ParentListRoutingModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class ParentListModule { }
