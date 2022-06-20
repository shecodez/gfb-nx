import { Component } from '@angular/core';

@Component({
  selector: 'gfb-nx-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPageComponent {
  hidePassword = true;
  passwordInputType = 'password';
  isValidMemberNumberAndPIN = false;
  passwordRequirements = [
    'At least one lowercase letter',
    'At least one uppercase letter',
    'At least one number',
    'A minimum of 8 characters total',
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  public togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
    this.passwordInputType = this.hidePassword ? 'password' : 'text';
  }

  public verifyMemberNumberAndPIN() {
    this.isValidMemberNumberAndPIN = true;
  }

  public forgotPIN() {
    // requires form.memberNumber
    // launch forgot-pin-modal
  }
}
