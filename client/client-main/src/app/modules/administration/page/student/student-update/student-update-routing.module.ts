import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentUpdateComponent } from './student-update.component';

const routes: Routes = [
  {
    path: "",
    component: StudentUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentUpdateRoutingModule { }
