import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { NavbarComponent } from 'src/app/layout/navbar/navbar.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { BreadcubComponent } from 'src/app/layout/breadcub/breadcub.component';

@NgModule({
  declarations: [
    AdministrationComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    BreadcubComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  providers: [],

})
export class AdministrationModule { }
