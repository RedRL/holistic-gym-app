import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonToggle, IonItem, IonLabel, IonButton, IonCard, IonCardContent, IonAlert } from '@ionic/angular/standalone';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonToggle, IonItem, IonLabel, IonButton, IonCard, IonCardContent, IonAlert, FormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  largeTextMode: boolean = false;
  highContrastMode: boolean = false;
  lastUpdated: string = new Date().toLocaleDateString();

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.loadSettings();
  }

  loadSettings() {
    this.largeTextMode = this.storageService.get('largeTextMode', false);
    this.highContrastMode = this.storageService.get('highContrastMode', false);
    
    // Apply settings to document
    this.applySettings();
  }

  toggleLargeText() {
    this.storageService.set('largeTextMode', this.largeTextMode);
    this.applySettings();
  }

  toggleHighContrast() {
    this.storageService.set('highContrastMode', this.highContrastMode);
    this.applySettings();
  }

  applySettings() {
    const body = document.body;
    
    if (this.largeTextMode) {
      body.classList.add('large-text');
    } else {
      body.classList.remove('large-text');
    }
    
    if (this.highContrastMode) {
      body.classList.add('high-contrast');
    } else {
      body.classList.remove('high-contrast');
    }
  }

  showClearDataAlert() {
    // In a real app, you would use IonAlert here
    if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      this.clearAllData();
    }
  }

  clearAllData() {
    this.storageService.clear();
    this.largeTextMode = false;
    this.highContrastMode = false;
    this.applySettings();
    
    // Reload the app to reset state
    window.location.reload();
  }
}
