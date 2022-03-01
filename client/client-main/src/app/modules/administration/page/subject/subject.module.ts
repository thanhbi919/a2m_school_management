import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
  ],
  imports: [
    MatSnackBarModule,
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
