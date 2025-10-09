import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';
import { DataService, Exercise, Completion } from '../../services/data.service';

@Component({
  selector: 'app-lets-begin',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './lets-begin.component.html',
  styleUrls: ['./lets-begin.component.scss']
})
export class LetsBeginComponent implements OnInit {
  selectedLevel: 'beginner' | 'advanced' | 'grand' = 'beginner';
  exercises: Exercise[] = [];
  completedToday: number = 0;
  totalExercises: number = 2;
  todayProgress: number = 0;

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // Read level from localStorage, default to beginner if missing
    const stored = localStorage.getItem('level') as any;
    this.selectedLevel = (stored === 'advanced' || stored === 'grand') ? stored : 'beginner';
    this.loadExercises();
    this.updateProgress();
  }

  loadExercises() {
    this.exercises = this.dataService.getExercises(this.selectedLevel);
  }

  startExercise(exercise: Exercise) {
    if (exercise.id === 'breathing') {
      this.startBreathingExercise(exercise);
    } else if (exercise.id === 'memory') {
      this.startMemoryGame(exercise);
    }
  }

  startBreathingExercise(exercise: Exercise) {
    // Navigate to breathing exercise component
    this.router.navigate(['/breathing-exercise'], { 
      queryParams: { 
        duration: exercise.duration,
        level: this.selectedLevel 
      } 
    });
  }

  startMemoryGame(exercise: Exercise) {
    // Navigate to memory game component
    this.router.navigate(['/memory-game'], { 
      queryParams: { 
        level: this.selectedLevel 
      } 
    });
  }

  updateProgress() {
    const todayCompletions = this.dataService.getTodayProgress();
    this.completedToday = todayCompletions.length;
    this.todayProgress = this.completedToday / this.totalExercises;
  }

  completeExercise(exerciseId: string, durationSec: number, score?: number) {
    const completion: Completion = {
      date: new Date().toISOString().split('T')[0],
      exerciseId,
      level: this.selectedLevel,
      durationSec,
      score
    };
    
    this.dataService.addCompletion(completion);
    this.updateProgress();
  }

  startMusicSession() {
    this.router.navigate(['/music-session']);
  }
}
