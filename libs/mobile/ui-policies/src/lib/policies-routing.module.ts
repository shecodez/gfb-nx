import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoliciesPageComponent } from './policies.page';

const routes: Routes = [
  {
    path: '',
    component: PoliciesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliciesPageComponentRoutingModule {}
