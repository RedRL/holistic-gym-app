import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardTitle],
  template: `
    <ion-card class="card">
      <ion-card-header *ngIf="title">
        <ion-card-title>{{ title }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ng-content></ng-content>
      </ion-card-content>
    </ion-card>
  `,
  styles: [`
    .card {
      --background: #ffffff;
      --color: var(--ion-color-text);
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      margin: 16px;
    }
  `]
})
export class CardComponent {
  @Input() title: string = '';
}
