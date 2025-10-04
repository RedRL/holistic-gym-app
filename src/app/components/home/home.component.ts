import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';
import { DataService } from '../../services/data.service';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  progressSubtitle = '';
  activeGoalsText = '';

  constructor(
    private router: Router,
    private dataService: DataService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.updateMicroFeedback();
  }

  updateMicroFeedback() {
    // Get today's progress
    const todayCompletions = this.dataService.getTodayProgress();
    const completedCount = Math.min(todayCompletions.length, 2);
    this.progressSubtitle = `${completedCount} ${this.translateService.t('of_done_today')}`;

    // Get active goals count
    const goals = this.dataService.getGoals();
    const activeCount = goals.filter(g => !g.done).length;
    this.activeGoalsText = `${activeCount} ${this.translateService.t('active_goals')}`;
  }

  nav(url: string) { 
    this.router.navigate([url]); 
  }
}
