import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClaimPageComponent } from './claim.page';
import { ClaimPageComponentRoutingModule } from './claim-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, ClaimPageComponentRoutingModule],
  declarations: [ClaimPageComponent],
})
export class ClaimPageComponentModule {}
