import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoroscoposPage } from './horoscopos.page';

const routes: Routes = [
  {
    path: '',
    component: HoroscoposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscoposPageRoutingModule {}
