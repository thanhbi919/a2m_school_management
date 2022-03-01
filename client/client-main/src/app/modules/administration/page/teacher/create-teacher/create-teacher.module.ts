import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTeacherRoutingModule } from './create-teacher-routing.module';
import { CreateTeacherComponent } from './create-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    CreateTeacherComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CreateTeacherRoutingModule,
    MatSnackBarModule
  ],

})
export class CreateTeacherModule { }
