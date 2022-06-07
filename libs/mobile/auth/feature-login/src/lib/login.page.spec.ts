import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPageComponent } from './login.page';
import { LoginPageComponentRoutingModule } from './login-routing.module';

describe('LoginPage', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        IonicModule.forRoot(),
        LoginPageComponentRoutingModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
  });

  it('Should create login form on page init', () => {
    component.ngOnInit();

    expect(component.loginForm).not.toBeUndefined();
  });

  it('should go to home page on click logo', () => {
    spyOn(router, 'navigate');

    // onClickLogo

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should go to register page on click register', () => {
    spyOn(router, 'navigate');

    // onClickRegister

    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });
});
