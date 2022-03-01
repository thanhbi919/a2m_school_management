import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: ()=> import("./class-list/class-list.module").then(m=>m.ClassListModule)
  },
  {
    path:"create",
    loadChildren: ()=> import("./create-class/create-class.module").then(m=>m.CreateClassModule)
  },
  {
    path:"add-subject",
    loadChildren: ()=> import("./class-add-subject/class-add-subject.module").then(m=>m.ClassAddSubjectModule)
  },
  {
    path: "update/:id",
    loadChildren: ()=> import("./class-update/class-update.module").then(m=>m.ClassUpdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
