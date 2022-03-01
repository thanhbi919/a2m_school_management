import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardTeacherRoutingModule } from './dashboard-teacher-routing.module';
import { DashboardTeacherComponent } from './dashboard-teacher.component';


@NgModule({
  declarations: [
    DashboardTeacherComponent
  ],
  imports: [
    CommonModule,
    DashboardTeacherRoutingModule
  ]
})
export class DashboardTeacherModule { }
