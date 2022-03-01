import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubclassUpdateComponent } from './subclass-update.component';

const routes: Routes = [
  {
    path: "",
    component: SubclassUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubclassUpdateRoutingModule { }
