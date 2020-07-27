import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipmentRoutingModule } from './equipment-routing.module';
import { EquipmentComponent } from './equipment.component';

@NgModule({
  imports: [
    CommonModule,
    EquipmentRoutingModule
  ],
  declarations: [EquipmentComponent]
})
export class EquipmentModule { }
