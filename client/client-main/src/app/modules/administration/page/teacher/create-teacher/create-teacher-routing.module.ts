import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeacherComponent } from './create-teacher.component';

const routes: Routes = [
  {
    path:"",
    component: CreateTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTeacherRoutingModule { }
