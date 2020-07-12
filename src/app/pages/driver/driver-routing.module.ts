import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverPage } from './driver.page';

const routes: Routes = [
  {
    path: '',
    component: DriverPage
  },
  {
    path: 'driver-login',
    loadChildren: () => import('./driver-login/driver-login.module').then( m => m.DriverLoginPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverPageRoutingModule {}
