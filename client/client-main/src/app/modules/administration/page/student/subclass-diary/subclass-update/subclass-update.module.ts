import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


import { SubclassUpdateRoutingModule } from './subclass-update-routing.module';
import { SubclassUpdateComponent } from './subclass-update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubclassUpdateComponent
  ],
  imports: [
    CommonModule,
    SubclassUpdateRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class SubclassUpdateModule { }
