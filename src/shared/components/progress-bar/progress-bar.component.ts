import { Component, Input } from '@angular/core';
import { IonProgressBar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [IonProgressBar],
  template: `
    <ion-progress-bar 
      [value]="progress" 
      class="progress-bar">
    </ion-progress-bar>
  `,
  styles: [`
    .progress-bar {
      --background: #e0e0e0;
      --progress-background: var(--ion-color-primary);
      height: 8px;
      border-radius: 4px;
    }
  `]
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
}
