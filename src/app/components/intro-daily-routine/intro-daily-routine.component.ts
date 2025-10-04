import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';

@Component({
  selector: 'app-intro-daily-routine',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './intro-daily-routine.component.html',
  styleUrls: ['./intro-daily-routine.component.scss']
})
export class IntroDailyRoutineComponent {
  constructor(private router: Router) {}

  startDemo() {
    this.router.navigate(['/routine-level']);
  }
}
