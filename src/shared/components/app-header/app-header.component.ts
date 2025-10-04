import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { TPipe } from '../../../app/shared/pipes/t.pipe';
import { TranslateService } from '../../../app/shared/services/translate.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TPipe],
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit, OnChanges {
  @Input() title = '';
  @Input() showBack = true;  // hide on Home
  @Input() showHome = true;  // hide on Home
  @Input() showUserInfo = false;  // show user info on home page

  userName = '';
  isGuest = false;

  constructor(
    private router: Router, 
    private location: Location,
    private translateService: TranslateService
  ) {
    // Listen for route changes to refresh user info
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        if ((event as NavigationEnd).url === '/home' && this.showUserInfo) {
          this.loadUserInfo();
        }
      });
  }

  ngOnInit() {
    if (this.showUserInfo) {
      this.loadUserInfo();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showUserInfo'] && this.showUserInfo) {
      this.loadUserInfo();
    }
  }

  loadUserInfo() {
    try {
      const profile = JSON.parse(localStorage.getItem('profile') || '{}');
      // Use firstName only, fall back to fullName if firstName not available
      this.userName = profile?.firstName || profile?.fullName?.split(' ')[0] || '';
      this.isGuest = localStorage.getItem('guest') === 'true';
    } catch {
      this.userName = '';
      this.isGuest = false;
    }
  }

  goBack() { if (this.showBack) this.location.back(); }
  goHome() { if (this.showHome) this.router.navigate(['/home']); }
  goToPersonalInfo() { this.router.navigate(['/personal-info']); }
} 