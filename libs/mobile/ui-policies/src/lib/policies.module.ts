import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PoliciesPageComponent } from './policies.page';
import { PoliciesPageComponentRoutingModule } from './policies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliciesPageComponentRoutingModule,
  ],
  declarations: [PoliciesPageComponent],
})
export class PoliciesPageComponentModule {}
