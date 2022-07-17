import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClaimCmsPageComponent } from './claim-cms.page';
import { ClaimCmsPageComponentRoutingModule } from './claim-cms-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, ClaimCmsPageComponentRoutingModule],
  declarations: [ClaimCmsPageComponent],
})
export class ClaimCmsPageComponentModule {}
