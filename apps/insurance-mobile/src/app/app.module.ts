import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { MobileShellModule } from '@gfb-nx/mobile/feature-shell';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [IonicModule.forRoot(), MobileShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
