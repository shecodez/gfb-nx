import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginForm } from './login-form';

@Component({
  selector: 'gfb-nx-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  hidePassword = true;
  passwordInputType = 'password';

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = new LoginForm(this.formBuilder).createForm();
  }

  public login() {
    this.router.navigate(['home']);
  }

  public register() {
    this.router.navigate(['register']);
  }

  public forgotPassword() {
    console.log('forgot password', this.loginForm);
    // toast: password reset sent to...
  }

  public togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
    this.passwordInputType = this.hidePassword ? 'password' : 'text';
  }
}
