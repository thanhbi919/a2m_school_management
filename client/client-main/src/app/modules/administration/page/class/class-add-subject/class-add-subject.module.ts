import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


import { ClassAddSubjectRoutingModule } from './class-add-subject-routing.module';
import { ClassAddSubjectComponent } from './class-add-subject.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassAddSubjectComponent
  ],
  imports: [
    CommonModule,
    ClassAddSubjectRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class ClassAddSubjectModule { }
