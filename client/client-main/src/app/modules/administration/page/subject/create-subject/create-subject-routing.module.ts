import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubjectComponent } from './create-subject.component';

const routes: Routes = [
  {
    path: "",
    component: CreateSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSubjectRoutingModule { }
