import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      { 
        path:"add",
        loadChildren: ()=> import("./subclass-add/subclass-add.module").then(m=>m.SubclassAddModule),
      },
      { 
        path:"update",
        loadChildren: ()=> import("./subclass-update/subclass-update.module").then(m=>m.SubclassUpdateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubclassDiaryRoutingModule { }
