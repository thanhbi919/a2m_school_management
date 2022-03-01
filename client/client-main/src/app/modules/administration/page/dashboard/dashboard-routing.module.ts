import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>import("./dashboard-teacher/dashboard-teacher.module").then(m=>m.DashboardTeacherModule)
  },
  {
    path: "",
    loadChildren: () =>import("./dashboard-admin/dashboard-admin.module").then(m=>m.DashboardAdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
