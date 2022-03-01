import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTeacherComponent } from './dashboard-teacher.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTeacherRoutingModule { }
