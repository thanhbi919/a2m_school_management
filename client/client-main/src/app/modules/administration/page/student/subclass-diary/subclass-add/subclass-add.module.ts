import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


import { SubclassAddRoutingModule } from './subclass-add-routing.module';
import { SubclassAddComponent } from './subclass-add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubclassAddComponent
  ],
  imports: [
    CommonModule,
    SubclassAddRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class SubclassAddModule { }
