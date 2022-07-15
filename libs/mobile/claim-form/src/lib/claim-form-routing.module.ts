import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaimFormPageComponent } from './claim-form.page';

const routes: Routes = [
  {
    path: '',
    component: ClaimFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClaimFormPageComponentRoutingModule {}
