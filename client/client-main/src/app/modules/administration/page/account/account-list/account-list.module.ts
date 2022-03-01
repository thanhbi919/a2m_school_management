import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListRoutingModule } from './account-list-routing.module';
import { AccountListComponent } from './account-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AccountListComponent
  ],
  imports: [
    CommonModule,
    AccountListRoutingModule,
    MatDialogModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule

  ]
})
export class AccountListModule { }
