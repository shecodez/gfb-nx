import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountPageComponent } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    // TODO: replace login and register with policies and payments page
    children: [
      {
        path: 'policies',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@gfb-nx/mobile/auth/feature-login').then(
                (m) => m.LoginPageComponentModule
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
              import('@gfb-nx/mobile/auth/feature-register').then(
                (m) => m.RegisterPageComponentModule
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
