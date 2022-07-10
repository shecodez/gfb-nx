import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembershipPageComponent } from './membership.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipPageComponentRoutingModule {}
