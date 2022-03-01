import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
  {
    path: "",
    component: AdministrationComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadChildren: () => import("./page/dashboard/dashboard.module").then(m => m.DashboardModule),
        canActivate:[AuthGuard],
        data:{
          roles: ["Manager","Teacher"]
        }
      },
      {
        path: "class",
        loadChildren: () => import("./page/class/class.module").then(m => m.ClassModule),
        canActivate:[AuthGuard],
        data:{
          roles: ["Manager","Teacher"]
        }
      },
      {
        path: "student",
        loadChildren: () => import("./page/student/student.module").then(m => m.StudentModule),
        canActivate:[AuthGuard],
        data:{
          roles: ["Manager","Teacher"]
        }
      },
      {
        path: "teacher",
        loadChildren: () => import("./page/teacher/teacher.module").then(m => m.TeacherModule),
        canActivate:[AuthGuard],
        data:{
          roles: ["Manager","Teacher"]
        }
      },
      {
        path: "subject",
        loadChildren: () => import("./page/subject/subject.module").then(m => m.SubjectModule),
        canActivate:[AuthGuard],
        data:{
          roles: ["Manager"]
        }
      },
      {
        path: "parent",
        loadChildren: () => import("./page/parent/parent.module").then(m => m.ParentModule),
        canActivate:[AuthGuard],
        data:{
          roles: ["Manager","Teacher"]
        }

      },
      {
        path: "account",
        loadChildren: () => import("./page/account/account.module").then(m => m.AccountModule),
        canActivate:[AuthGuard],
        data:{
          roles: ["Manager"]
        }
      }
    ]
  },
  {
    path: "**",

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
