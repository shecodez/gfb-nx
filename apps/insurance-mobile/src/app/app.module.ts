import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MobileShellModule } from '@gfb-nx/mobile/feature-shell';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    MobileShellModule,
    RouterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
