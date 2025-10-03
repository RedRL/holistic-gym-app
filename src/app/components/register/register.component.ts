import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { DataService, Profile } from '../../services/data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: [''],
      phone: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const profile: Profile = this.registerForm.value;
      this.dataService.saveProfile(profile);
      this.router.navigate(['/home']);
    }
  }

  skipRegistration() {
    this.router.navigate(['/home']);
  }
}
