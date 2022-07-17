import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountPageComponent } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    // TODO: replace register with payments page
    children: [
      {
        path: 'membership',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@gfb-nx/mobile/feature-membership').then(
                (m) => m.MembershipPageComponentModule
              ),
          },
        ],
      },
      {
        path: 'policies',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@gfb-nx/mobile/feature-policies').then(
                (m) => m.PoliciesPageComponentModule
              ),
          },
        ],
      },
      {
        path: 'invoices',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@gfb-nx/mobile/feature-invoices').then(
                (m) => m.InvoicesPageComponentModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/account/policies',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageComponentRoutingModule {}
