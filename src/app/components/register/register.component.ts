import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, AppHeaderComponent, TPipe],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    age: ['', [Validators.required]],
    email: ['', [Validators.email]],
    phone: ['']
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  asGuest() {
    localStorage.setItem('guest','true');
    this.router.navigate(['/home']);
  }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    localStorage.removeItem('guest');
    localStorage.setItem('profile', JSON.stringify(this.form.value));
    this.router.navigate(['/welcome']);
  }
}
