import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FeedComponent } from './feed/components/feed/feed.component';

@Component({
  selector: 'tt-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FeedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
