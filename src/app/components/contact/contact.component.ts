import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  sendEmail() {
    const subject = 'Brain Power App Support';
    const body = 'Hello,\n\nI need help with the Brain Power app. Please provide assistance with:\n\n';
    const mailtoLink = `mailto:support@brainpower.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink, '_blank');
  }
}
