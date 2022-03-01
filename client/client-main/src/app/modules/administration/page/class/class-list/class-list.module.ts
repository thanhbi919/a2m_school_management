import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';

import { ClassListRoutingModule } from './class-list-routing.module';
import { ClassListComponent } from './class-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassListComponent
  ],
  imports: [
    CommonModule,
    ClassListRoutingModule,
    MatPaginatorModule,
    FormsModule
  ]
})
export class ClassListModule { }
