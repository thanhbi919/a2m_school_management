import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherListRoutingModule } from './teacher-list-routing.module';
import { TeacherListComponent } from './teacher-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchTeacherComponent } from '../search-teacher/search-teacher.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    TeacherListComponent,
    SearchTeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherListRoutingModule,
    MatSnackBarModule,
    MatPaginatorModule
  ]
})
export class TeacherListModule { }
