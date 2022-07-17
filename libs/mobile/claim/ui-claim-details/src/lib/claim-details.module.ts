import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClaimDetailsPageComponent } from './claim-details.page';
import { ClaimDetailsPageComponentRoutingModule } from './claim-details-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, ClaimDetailsPageComponentRoutingModule],
  declarations: [ClaimDetailsPageComponent],
})
export class ClaimDetailsPageComponentModule {}
