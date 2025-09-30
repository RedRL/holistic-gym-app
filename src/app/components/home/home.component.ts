import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardContent, IonIcon, IonChip } from '@ionic/angular/standalone';
import { DataService, Profile } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardContent, IonIcon, IonChip, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile: Profile | null = null;

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.profile = this.dataService.getProfile();
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
