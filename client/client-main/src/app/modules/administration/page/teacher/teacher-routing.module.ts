import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/modules/auth/auth.guard';

const routes: Routes = [
  {
    path: "search/:keyword",
    loadChildren: () => import("./teacher-list/teacher-list.module").then(m => m.TeacherListModule),
    canActivate:[AuthGuard],
    data:{
      roles: ["Manager","Teacher"]
    }
  },
  {
    path: "",
    loadChildren: () => import("./teacher-list/teacher-list.module").then(m => m.TeacherListModule),
    canActivate:[AuthGuard],
    data:{
      roles: ["Manager","Teacher"]
    }
  },
  {
    path: "detail/:id",
    loadChildren: () => import("./teacher-detail/teacher-detail.module").then(m => m.TeacherDetailModule)
  },
  {
    path: "create",
    loadChildren: () => import("./create-teacher/create-teacher.module").then(m => m.CreateTeacherModule),
    canActivate:[AuthGuard],
    data:{
      roles: ["Manager","Teacher"]
    }
  },
  {
    path: "update/:id",
    loadChildren: () => import("./teacher-update/teacher-update.module").then(m => m.TeacherUpdateModule),
    canActivate:[AuthGuard],
    data:{
      roles: ["Manager","Teacher"]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
