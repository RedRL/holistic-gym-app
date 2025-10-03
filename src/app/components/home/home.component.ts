import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  progressSubtitle = '0 of 2 done today';
  activeGoalsText = '0 active goals';

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.updateMicroFeedback();
  }

  updateMicroFeedback() {
    // Get today's progress
    const todayCompletions = this.dataService.getTodayProgress();
    const completedCount = Math.min(todayCompletions.length, 2);
    this.progressSubtitle = `${completedCount} of 2 done today`;

    // Get active goals count
    const goals = this.dataService.getGoals();
    const activeCount = goals.filter(g => !g.done).length;
    this.activeGoalsText = `${activeCount} active goal${activeCount !== 1 ? 's' : ''}`;
  }

  nav(url: string) { 
    this.router.navigate([url]); 
  }
}
