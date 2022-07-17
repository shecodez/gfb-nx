import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClaimListPageComponent } from './claim-list.page';
import { ClaimListPageComponentRoutingModule } from './claim-list-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, ClaimListPageComponentRoutingModule],
  declarations: [ClaimListPageComponent],
})
export class ClaimListPageComponentModule {}
