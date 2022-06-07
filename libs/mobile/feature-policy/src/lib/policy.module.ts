import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { PolicyPageComponent } from './policy.page';
import { PolicyPageComponentRoutingModule } from './policy-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicyPageComponentRoutingModule,
  ],
  declarations: [PolicyPageComponent],
})
export class PolicyPageComponentModule {}
