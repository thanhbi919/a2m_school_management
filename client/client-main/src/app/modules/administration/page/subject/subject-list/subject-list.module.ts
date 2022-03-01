import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectListRoutingModule } from './subject-list-routing.module';
import { SubjectListComponent } from './subject-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubjectListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SubjectListRoutingModule
  ]
})
export class SubjectListModule { }
