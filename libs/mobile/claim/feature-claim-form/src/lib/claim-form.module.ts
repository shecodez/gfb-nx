import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClaimFormPageComponent } from './claim-form.page';
import { ClaimFormPageComponentRoutingModule } from './claim-form-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, ClaimFormPageComponentRoutingModule],
  declarations: [ClaimFormPageComponent],
})
export class ClaimFormPageComponentModule {}
