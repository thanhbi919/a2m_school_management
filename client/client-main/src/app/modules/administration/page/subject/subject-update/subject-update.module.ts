import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectUpdateRoutingModule } from './subject-update-routing.module';
import { SubjectUpdateComponent } from './subject-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubjectUpdateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SubjectUpdateRoutingModule
  ]
})
export class SubjectUpdateModule { }
