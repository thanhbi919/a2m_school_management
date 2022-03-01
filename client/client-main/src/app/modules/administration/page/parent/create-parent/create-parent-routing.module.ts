import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateParentComponent } from './create-parent.component';

const routes: Routes = [
  {
    path: "",
    component: CreateParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateParentRoutingModule { }
