import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { DataService, Profile } from '../../services/data.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [IonContent, IonItem, IonLabel, IonInput, IonButton, IonHeader, IonToolbar, IonTitle, ReactiveFormsModule],
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
