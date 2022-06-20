import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvoicesPageComponent } from './invoices.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesPageComponentRoutingModule {}
