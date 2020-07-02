import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProductPage } from './view-product.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProductPage
  },
  {
    path: 'info-product',
    loadChildren: () => import('./info-product/info-product.module').then( m => m.InfoProductPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProductPageRoutingModule {}
