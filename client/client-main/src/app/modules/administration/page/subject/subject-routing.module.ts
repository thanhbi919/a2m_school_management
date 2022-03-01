import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./subject-list/subject-list.module").then(m=>m.SubjectListModule)
  },
  {
    path: "create",
    loadChildren: () => import("./create-subject/create-subject.module").then(m=>m.CreateSubjectModule)
  },
  {
    path: "update/:id",
    loadChildren: () => import("./subject-update/subject-update.module").then(m=>m.SubjectUpdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
