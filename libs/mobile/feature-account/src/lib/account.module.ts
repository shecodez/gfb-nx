import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AccountPageComponent } from './account.page';
import { AccountPageComponentRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageComponentRoutingModule,
  ],
  declarations: [AccountPageComponent],
})
export class AccountPageComponentModule {}
