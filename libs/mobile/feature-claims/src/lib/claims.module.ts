import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ClaimsPageComponent } from './claims.page';
import { ClaimsPageComponentRoutingModule } from './claims-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, ClaimsPageComponentRoutingModule],
  declarations: [ClaimsPageComponent],
})
export class ClaimsPageComponentModule {}
