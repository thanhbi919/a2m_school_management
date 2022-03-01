import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassUpdateComponent } from './class-update.component';

const routes: Routes = [
  {
    path: "",
    component: ClassUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassUpdateRoutingModule { }
