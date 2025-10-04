import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    // Ensure the language class is applied
    this.translateService.applyDir();
    
    // Debug: Check if lang-he class is applied
    console.log('Body classes:', document.body.className);
    console.log('Current language:', this.translateService.lang);
    
    // Debug: Check CSS variables
    const rootStyles = getComputedStyle(document.documentElement);
    console.log('--hebrew-arrow:', rootStyles.getPropertyValue('--hebrew-arrow'));
    console.log('--hebrew-margin-left:', rootStyles.getPropertyValue('--hebrew-margin-left'));
    console.log('--hebrew-transform:', rootStyles.getPropertyValue('--hebrew-transform'));
  }
  
  sendWhatsApp() {
    const message = 'Hello,\n\nI need help with the Brain Power app. Please provide assistance with:\n\n';
    const whatsappLink = `https://wa.me/972797291729?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappLink, '_blank');
  }
}
