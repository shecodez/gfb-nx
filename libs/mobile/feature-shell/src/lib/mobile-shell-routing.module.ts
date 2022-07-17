import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'claim',
    loadChildren: () =>
      import('@gfb-nx/mobile/claim/feature-claim').then(
        (m) => m.ClaimPageComponentModule
      ),
  },
  {
    path: 'claim/:id',
    loadChildren: () =>
      import('@gfb-nx/mobile/claim/ui-claim-details').then(
        (m) => m.ClaimDetailsPageComponentModule
      ),
  },
  {
    path: 'file-a-claim',
    loadChildren: () =>
      import('@gfb-nx/mobile/claim/feature-claim-form').then(
        (m) => m.ClaimFormPageComponentModule
      ),
  },

  {
    path: 'policy/:id',
    loadChildren: () =>
      import('@gfb-nx/mobile/feature-policy').then(
        (m) => m.PolicyPageComponentModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@gfb-nx/mobile/feature-account').then(
        (m) => m.AccountPageComponentModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@gfb-nx/mobile/auth/feature-register').then(
        (m) => m.RegisterPageComponentModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@gfb-nx/mobile/auth/feature-login').then(
        (m) => m.LoginPageComponentModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@gfb-nx/mobile/feature-home').then(
        (m) => m.HomePageComponentModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class MobileShellRoutingModule {}
