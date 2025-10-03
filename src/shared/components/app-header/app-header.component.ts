import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  @Input() title = '';
  @Input() showBack = true;  // hide on Home
  @Input() showHome = true;  // hide on Home

  constructor(private router: Router, private location: Location) {}
  goBack() { if (this.showBack) this.location.back(); }
  goHome() { if (this.showHome) this.router.navigate(['/home']); }
} 