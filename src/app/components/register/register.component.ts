import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, AppHeaderComponent, TPipe],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[a-zA-Z\u0590-\u05FF\s\'\-\"]+$/)]],
    lastName: ['', [Validators.pattern(/^[a-zA-Z\u0590-\u05FF\s\'\-\"]*$/)]],
    age: ['', [Validators.min(1), Validators.max(120)]],
    weight: ['', [Validators.min(1), Validators.max(300)]],
    height: ['', [Validators.min(0.5), Validators.max(3.0)]],
    email: ['', [Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9\s\-\+\(\)]+$/)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private translateService: TranslateService) {}

  asGuest() {
    localStorage.setItem('guest','true');
    this.router.navigate(['/home']);
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    localStorage.removeItem('guest');
    
    const formData = this.form.value;
    const profileData = {
      fullName: `${formData.firstName} ${formData.lastName || ''}`.trim(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      weight: formData.weight,
      height: formData.height,
      email: formData.email,
      phone: formData.phone
    };
    
    localStorage.setItem('profile', JSON.stringify(profileData));
    this.router.navigate(['/welcome']);
  }

  getFieldError(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return this.translateService.t('field_required');
      }
      if (field.errors['minlength']) {
        return this.translateService.t('field_too_short');
      }
      if (field.errors['maxlength']) {
        return this.translateService.t('field_too_long');
      }
      if (field.errors['email']) {
        return this.translateService.t('invalid_email');
      }
      if (field.errors['pattern']) {
        if (fieldName === 'firstName' || fieldName === 'lastName') {
          return this.translateService.t('invalid_name');
        }
        if (fieldName === 'phone') {
          return this.translateService.t('invalid_phone');
        }
      }
      if (field.errors['min'] || field.errors['max']) {
        if (fieldName === 'age') {
          return this.translateService.t('invalid_age');
        }
        if (fieldName === 'weight') {
          return this.translateService.t('invalid_weight');
        }
        if (fieldName === 'height') {
          return this.translateService.t('invalid_height');
        }
      }
    }
    return '';
  }

  // Prevent illegal characters from being typed
  onNameKeyPress(event: KeyboardEvent): boolean {
    const char = event.key;
    const allowedChars = /^[a-zA-Z\u0590-\u05FF\s\'\-\"]$/;
    return allowedChars.test(char) || event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab';
  }

  onPhoneKeyPress(event: KeyboardEvent): boolean {
    const char = event.key;
    const allowedChars = /^[0-9\s\-\+\(\)]$/;
    return allowedChars.test(char) || event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab';
  }

  onAgeKeyPress(event: KeyboardEvent): boolean {
    const char = event.key;
    const allowedChars = /^[0-9]$/;
    return allowedChars.test(char) || event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab';
  }

  onWeightKeyPress(event: KeyboardEvent): boolean {
    const char = event.key;
    const allowedChars = /^[0-9]$/;
    return allowedChars.test(char) || event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab';
  }

  onHeightKeyPress(event: KeyboardEvent): boolean {
    const char = event.key;
    const allowedChars = /^[0-9.]$/;
    return allowedChars.test(char) || event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab';
  }
}
