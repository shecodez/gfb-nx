import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { InvoicesPageComponent } from './invoices.page';
import { InvoicesPageComponentRoutingModule } from './invoices-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesPageComponentRoutingModule,
  ],
  declarations: [InvoicesPageComponent],
})
export class InvoicesPageComponentModule {}
