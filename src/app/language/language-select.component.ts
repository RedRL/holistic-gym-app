import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { TranslateService } from '../shared/services/translate.service';
import { TPipe } from '../shared/pipes/t.pipe';

@Component({
  standalone: true,
  selector: 'app-language-select',
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.css']
})
export class LanguageSelectComponent {
  constructor(private tr: TranslateService, private router: Router) {}

  choose(lang: 'en'|'he') {
    this.tr.setLang(lang);

    // Decide next step
    const profile = localStorage.getItem('profile');
    const guest = localStorage.getItem('guest') === 'true';
    if (profile || guest) this.router.navigate(['/home']);
    else this.router.navigate(['/register']);
  }
}
