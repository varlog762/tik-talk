import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ProfileCardComponent } from './common-ui/profile-card/profile-card.component';

@Component({
  selector: 'tt-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tik-talk';
}
