import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { LoginRequestInterface } from '../../models/login-request.interface';
import { LoginResponseInterface } from '../../models/login-response.intrerface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  login(loginInput: LoginRequestInterface): Observable<LoginResponseInterface> {
    const formData = new FormData();
    formData.append('username', loginInput.username);
    formData.append('password', loginInput.password);

    return this.http.post<LoginResponseInterface>('/auth/token', formData);
  }
}
