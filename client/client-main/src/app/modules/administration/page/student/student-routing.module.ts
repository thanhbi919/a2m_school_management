import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>import("./student-list/student-list.module").then(m=>m.StudentListModule)
  },
  {
    path: "detail/:id",
    loadChildren: ()=>import("./student-detail/student-detail.module").then(m=>m.StudentDetailModule)
  },
  {
    path: "create",
    loadChildren: ()=>import("./create-student/create-student.module").then(m=>m.CreateStudentModule)
  },
  {
    path: "update/:id",
    loadChildren: ()=>import("./student-update/student-update.module").then(m=>m.StudentUpdateModule)
  },
  {
    path: "subclass",
    loadChildren: () => import("./subclass-diary/subclass-diary.module").then(m=>m.SubclassDiaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
