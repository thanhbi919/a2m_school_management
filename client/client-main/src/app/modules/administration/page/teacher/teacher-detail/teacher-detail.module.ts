import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherDetailRoutingModule } from './teacher-detail-routing.module';
import { TeacherDetailComponent } from './teacher-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    TeacherDetailComponent
  ],
  imports: [
    CommonModule,
    TeacherDetailRoutingModule,
    MatSnackBarModule
  ]
})
export class TeacherDetailModule { }
