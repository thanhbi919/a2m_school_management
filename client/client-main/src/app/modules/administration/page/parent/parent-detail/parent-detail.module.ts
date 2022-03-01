import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentDetailRoutingModule } from './parent-detail-routing.module';
import { ParentDetailComponent } from './parent-detail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParentDetailComponent
  ],
  imports: [
    CommonModule,
    ParentDetailRoutingModule,
    FormsModule
  ]
})
export class ParentDetailModule { }
