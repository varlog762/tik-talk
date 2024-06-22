import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';

import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
import { UserProfileInterface } from '../../models/user-profile.interface';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'tt-search-page',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  profiles$!: Observable<UserProfileInterface[]>;
  profileService = inject(ProfileService);

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.profiles$ = this.profileService.getTestAccounts();
  }
}
