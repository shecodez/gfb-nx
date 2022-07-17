import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaimDetailsPageComponent } from './claim-details.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimDetailsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimDetailsPageComponentRoutingModule {}
