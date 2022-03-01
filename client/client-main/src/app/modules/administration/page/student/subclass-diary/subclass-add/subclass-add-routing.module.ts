import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubclassAddComponent } from './subclass-add.component';

const routes: Routes = [
  {
    path: "",
    component: SubclassAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubclassAddRoutingModule { }
