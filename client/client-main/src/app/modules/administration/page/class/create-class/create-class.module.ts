import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


import { CreateClassRoutingModule } from './create-class-routing.module';
import { CreateClassComponent } from './create-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateClassComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CreateClassRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class CreateClassModule { }
