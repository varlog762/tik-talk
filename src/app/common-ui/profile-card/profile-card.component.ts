import { Component, Input } from '@angular/core';

import { UserProfileInterface } from '../../models/user-profile.interface';
import { ImageUrlBuilderPipe } from '../../pipes/image-url-builder.pipe';

@Component({
  selector: 'tt-profile-card',
  standalone: true,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
  imports: [ImageUrlBuilderPipe],
})
export class ProfileCardComponent {
  @Input({ alias: 'userProfile' }) userProfileProps!: UserProfileInterface;
}
