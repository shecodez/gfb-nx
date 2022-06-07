import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginForm } from './login-form';
describe('LoginForm', () => {
  let loginForm: LoginForm;
  let form: FormGroup;

  beforeEach(() => {
    loginForm = new LoginForm(new FormBuilder());
    form = loginForm.createForm();
  });

  it('Should render the login form with empty values', () => {
    expect(form).not.toBeNull();

    expect(form.get('email')).not.toBeNull();
    expect(form.get('email')?.value).toEqual('');
    expect(form.get('email')?.valid).toBeFalsy();

    expect(form.get('password')).not.toBeNull();
    expect(form.get('password')?.value).toEqual('');
    expect(form.get('email')?.valid).toBeFalsy();
  });

  it('Should show invalid email if email is !valid', () => {
    form.get('email')?.setValue('bad[at]email[dot]com');

    expect(form.get('email')?.valid).toBeFalsy();
  });

  it('Should show valid email if email is valid', () => {
    form.get('email')?.setValue('good@email.com');

    expect(form.get('email')?.valid).toBeTruthy();
  });

  it('Should show valid form if email and password are valid', () => {
    form.get('email')?.setValue('good@email.com');
    form.get('password')?.setValue('P@ssw0rd123');

    expect(form?.valid).toBeTruthy();
  });
});
