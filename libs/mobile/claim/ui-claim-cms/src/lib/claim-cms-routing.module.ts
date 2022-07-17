import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaimCmsPageComponent } from './claim-cms.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimCmsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimCmsPageComponentRoutingModule {}
