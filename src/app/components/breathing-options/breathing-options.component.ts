import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';

@Component({
  selector: 'app-breathing-options',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './breathing-options.component.html',
  styleUrls: ['./breathing-options.component.scss']
})
export class BreathingOptionsComponent {
  constructor(private router: Router) {}

  selectOption(type: 'youtube' | 'ai-youtube' | 'ai-video') {
    this.router.navigate(['/breathing-session'], {
      queryParams: { type }
    });
  }
}

