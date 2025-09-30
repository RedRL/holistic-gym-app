import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCheckbox, IonItem, IonLabel, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { DataService, Goal } from '../../services/data.service';

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonCheckbox, IonItem, IonLabel, IonButton, IonCard, IonCardContent, FormsModule, CommonModule, DatePipe],
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] = [];
  completedGoals: number = 0;
  totalGoals: number = 0;
  completionPercentage: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadGoals();
  }

  loadGoals() {
    this.goals = this.dataService.getGoals();
    this.updateProgress();
  }

  toggleGoal(goal: Goal) {
    goal.done = !goal.done;
    this.dataService.saveGoals(this.goals);
    this.updateProgress();
  }

  updateProgress() {
    this.completedGoals = this.goals.filter(g => g.done).length;
    this.totalGoals = this.goals.length;
    this.completionPercentage = this.totalGoals > 0 ? Math.round((this.completedGoals / this.totalGoals) * 100) : 0;
  }

  addNewGoal() {
    const newGoal: Goal = {
      id: Date.now().toString(),
      title: 'New goal',
      done: false
    };
    
    this.goals.push(newGoal);
    this.dataService.saveGoals(this.goals);
    this.updateProgress();
  }
}
