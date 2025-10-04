import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { TPipe } from '../shared/pipes/t.pipe';

@Component({
  standalone: true,
  selector: 'app-welcome',
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name = '';
  constructor(private router: Router) {
    try {
      const p = JSON.parse(localStorage.getItem('profile') || '{}');
      this.name = p?.fullName || '';
    } catch {}
  }
  continue() { this.router.navigate(['/home']); }
}
