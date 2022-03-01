import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>import("./parent-list/parent-list.module").then(m=>m.ParentListModule)
  },
  {
    path: "detail/:id",
    loadChildren: () =>import("./parent-detail/parent-detail.module").then(m=>m.ParentDetailModule)
  },
  {
    path: "create",
    loadChildren: () =>import("./create-parent/create-parent.module").then(m=>m.CreateParentModule)
  },
  {
    path: "update/:id",
    loadChildren: () =>import("./parent-update/parent-update.module").then(m=>m.ParentUpdateModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
