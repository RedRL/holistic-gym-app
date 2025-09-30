import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardContent, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-intro-daily-routine',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard, IonCardContent, IonIcon],
  templateUrl: './intro-daily-routine.component.html',
  styleUrls: ['./intro-daily-routine.component.scss']
})
export class IntroDailyRoutineComponent {
  constructor(private router: Router) {}

  startDemo() {
    this.router.navigate(['/lets-begin']);
  }
}
