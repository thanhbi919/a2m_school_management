import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailRoutingModule } from './student-detail-routing.module';
import { StudentDetailComponent } from './student-detail.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';
import { SubclassDiaryComponent } from './subclass-diary/subclass-diary.component';
import { SubjectStudentComponent } from './subject-student/subject-student.component';


@NgModule({
  declarations: [
    StudentDetailComponent,
    StudentInfoComponent,
    ParentInfoComponent,
    SubclassDiaryComponent,
    SubjectStudentComponent
  ],
  imports: [
    CommonModule,
    StudentDetailRoutingModule
  ]
})
export class StudentDetailModule { }
