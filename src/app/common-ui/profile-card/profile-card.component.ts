import { Component, Input } from '@angular/core';

import { UserProfileInterface } from '../../models/user-profile.interface';

@Component({
  selector: 'tt-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input({ alias: 'userProfile' }) userProfileProps!: UserProfileInterface;
}
