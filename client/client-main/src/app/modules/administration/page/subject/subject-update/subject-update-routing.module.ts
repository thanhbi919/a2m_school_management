import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectUpdateComponent } from './subject-update.component';

const routes: Routes = [
  {
    path: "",
    component: SubjectUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectUpdateRoutingModule { }
