import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodiacalesPage } from './zodiacales.page';

const routes: Routes = [
  {
    path: '',
    component: ZodiacalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodiacalesPageRoutingModule {}
