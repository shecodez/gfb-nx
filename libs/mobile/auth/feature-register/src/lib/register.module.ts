import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RegisterPageComponent } from './register.page';
import { RegisterPageComponentRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageComponentRoutingModule,
  ],
  declarations: [RegisterPageComponent],
})
export class RegisterPageComponentModule {}
