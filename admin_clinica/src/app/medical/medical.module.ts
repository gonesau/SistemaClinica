import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalRoutingModule } from './medical-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MedicalComponent } from './medical.component';
//import { HeaderComponent } from '../common-component/header/header.component';
//import { SidebarComponent } from '../common-component/sidebar/sidebar.component';


@NgModule({
  declarations: [
    MedicalComponent,
    //HeaderComponent,
    //SidebarComponent,
  ],
  imports: [
    CommonModule,
    MedicalRoutingModule,
    SharedModule,
  ]
})
export class MedicalModule { }
