import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassAddSubjectComponent } from './class-add-subject.component';

const routes: Routes = [
  {
    path: "",
    component: ClassAddSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassAddSubjectRoutingModule { }
