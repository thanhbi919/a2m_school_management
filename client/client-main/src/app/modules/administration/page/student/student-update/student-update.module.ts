import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


import { StudentUpdateRoutingModule } from './student-update-routing.module';
import { StudentUpdateComponent } from './student-update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,
    StudentUpdateRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class StudentUpdateModule { }
