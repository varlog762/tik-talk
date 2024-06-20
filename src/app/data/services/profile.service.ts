import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { UserProfileInterface } from '../../models/user-profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private http = inject(HttpClient);

  getTestAccounts(): Observable<UserProfileInterface[]> {
    return this.http.get<UserProfileInterface[]>('/account/test_accounts');
  }
}
