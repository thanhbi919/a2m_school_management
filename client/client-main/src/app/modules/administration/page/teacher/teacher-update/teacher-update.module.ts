import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherUpdateRoutingModule } from './teacher-update-routing.module';
import { TeacherUpdateComponent } from './teacher-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    TeacherUpdateComponent
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    CommonModule,
    TeacherUpdateRoutingModule,
    MatSnackBarModule
  ]

})
export class TeacherUpdateModule { }
