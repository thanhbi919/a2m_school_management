import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentUpdateComponent } from './parent-update.component';

const routes: Routes = [
  {
    path: "",
    component: ParentUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentUpdateRoutingModule { }
