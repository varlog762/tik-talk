import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { UserProfileInterface } from '../../../models/user-profile.interface';
import { ProfileService } from '../../../data/services/profile.service';
import { ProfileCardComponent } from '../../../common-ui/profile-card/profile-card.component';

@Component({
  selector: 'tt-feed',
  standalone: true,
  imports: [CommonModule, ProfileCardComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  profiles$!: Observable<UserProfileInterface[]>;
  profileService = inject(ProfileService);

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.profiles$ = this.profileService.getTestAccounts();
  }
}
