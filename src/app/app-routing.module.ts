import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'grid-page', pathMatch: 'full' },
  {
    path: 'grid-page',
    loadChildren: () => import('./pages/grid-page/grid-page.module').then(m => m.GridPagePageModule)
  },
  {
    path: 'horoscopos',
    loadChildren: () => import('./horoscopos/horoscopos.module').then( m => m.HoroscoposPageModule)
  },  {
    path: 'zodiacales',
    loadChildren: () => import('./zodiacales/zodiacales.module').then( m => m.ZodiacalesPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
