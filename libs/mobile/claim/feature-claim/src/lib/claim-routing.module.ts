import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaimPageComponent } from './claim.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimPageComponent,
    children: [
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@gfb-nx/mobile/claim/ui-claim-list').then(
                (m) => m.ClaimListPageComponentModule
              ),
          },
        ],
      },
      {
        path: 'file',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@gfb-nx/mobile/claim/ui-claim-cms').then(
                (m) => m.ClaimCmsPageComponentModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/claim/list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimPageComponentRoutingModule {}
