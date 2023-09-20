import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AppRoutes } from 'src/app/app.routing';
import { AuthService } from 'src/app/services/auth.service';
import { ILoginForm, ILoginResponse } from 'src/app/shared/types/auth.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  // (1) - FORM INPUT: Types and Validators
  public loginForm: FormGroup<ILoginForm> = this.fb.group<ILoginForm>({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  // (2A) - LOGIN LOGIC: Test if works first
  // (2B) - AUTH SERVICE: Retrieves JWT
  // (2C) - LOCAL STORAGE: Subscribe and Save retrieves data
  public onLogin(): void {
    this.authService
      .login({
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      })
      .pipe(take(1))
      .subscribe((loginResponse: ILoginResponse) => {
        if (loginResponse.jwt) localStorage.setItem('token', loginResponse.jwt);
        // this.router.navigate([AppRoutes.HOME]);
        this.router.navigate(['/home']);
      });
  }
}
