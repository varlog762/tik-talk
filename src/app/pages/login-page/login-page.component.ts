import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { LoginResponseInterface } from '../../models/login-response.intrerface';
import { LoginRequestInterface } from '../../models/login-request.interface';

@Component({
  selector: 'tt-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  form!: FormGroup;
  response$!: Observable<LoginResponseInterface>;
  responseSubscription!: Subscription;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const loginInput: LoginRequestInterface = this.form.value;

      this.responseSubscription = this.authService
        .login(loginInput)
        .subscribe();
    }
  }

  ngOnDestroy(): void {
    this.responseSubscription.unsubscribe();
  }
}
