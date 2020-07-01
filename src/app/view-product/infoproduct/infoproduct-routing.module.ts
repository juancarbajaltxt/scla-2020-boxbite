import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoproductPage } from './infoproduct.page';

const routes: Routes = [
  {
    path: '',
    component: InfoproductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoproductPageRoutingModule {}
