import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { MembershipPageComponent } from './membership.page';
import { MembershipPageComponentRoutingModule } from './membership-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipPageComponentRoutingModule,
  ],
  declarations: [MembershipPageComponent],
})
export class MembershipPageComponentModule {}
