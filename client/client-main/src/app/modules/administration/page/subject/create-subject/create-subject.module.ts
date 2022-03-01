import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateSubjectRoutingModule } from './create-subject-routing.module';
import { CreateSubjectComponent } from './create-subject.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CreateSubjectComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    CreateSubjectRoutingModule
  ]
})
export class CreateSubjectModule { }
