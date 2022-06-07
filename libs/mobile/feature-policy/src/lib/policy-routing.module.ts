import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PolicyPageComponent } from './policy.page';

const routes: Routes = [
  {
    path: '',
    component: PolicyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PolicyPageComponentRoutingModule {}
