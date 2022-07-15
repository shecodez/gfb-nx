import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaimsPageComponent } from './claims.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimsPageComponent,
    children: [
      {
        path: 'new',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@gfb-nx/mobile/claim-form').then(
                (m) => m.ClaimFormPageComponentModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimsPageComponentRoutingModule {}
