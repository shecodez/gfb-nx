import { Component } from '@angular/core';

@Component({
  selector: 'gfb-nx-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPageComponent {
  hidePassword = true;
  passwordInputType = 'password';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
    this.passwordInputType = this.hidePassword ? 'password' : 'text';
  }
}
