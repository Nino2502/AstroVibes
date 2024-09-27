import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoroscoposPageRoutingModule } from './horoscopos-routing.module';

import { HoroscoposPage } from './horoscopos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoroscoposPageRoutingModule
  ],
  declarations: [HoroscoposPage]
})
export class HoroscoposPageModule {}
