import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { ClassUpdateRoutingModule } from './class-update-routing.module';
import { ClassUpdateComponent } from './class-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClassUpdateComponent
  ],
  imports: [
    CommonModule,
    ClassUpdateRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class ClassUpdateModule { }
