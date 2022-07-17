import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaimListPageComponent } from './claim-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimListPageComponentRoutingModule {}
