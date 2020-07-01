import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoproductPageRoutingModule } from './infoproduct-routing.module';

import { InfoproductPage } from './infoproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoproductPageRoutingModule
  ],
  declarations: [InfoproductPage]
})
export class InfoproductPageModule {}
