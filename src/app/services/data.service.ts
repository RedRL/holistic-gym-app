import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export interface Profile {
  name: string;
  age: number;
  email: string;
  phone: string;
}

export interface Completion {
  date: string;
  exerciseId: string;
  level: 'beginner' | 'advanced' | 'grand';
  durationSec: number;
  score?: number;
}

export interface Goal {
  id: string;
  title: string;
  done: boolean;
  dueDate?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  body: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: number;
  level: 'beginner' | 'advanced' | 'grand';
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private storage: StorageService) {}

  getProfile(): Profile | null {
    return this.storage.get<Profile | null>('profile', null);
  }

  saveProfile(profile: Profile): void {
    this.storage.set('profile', profile);
  }

  getRoutines(level: 'beginner' | 'advanced' | 'grand') {
    return [
      {
        id: 'breathing',
        title: 'Breathing Exercise',
        description: '5-minute guided breathing session',
        duration: 5,
        level: level
      },
      {
        id: 'memory',
        title: 'Memory Game',
        description: 'Pattern matching exercise',
        duration: 3,
        level: level
      }
    ];
  }

  getExercises(level: 'beginner' | 'advanced' | 'grand'): Exercise[] {
    return this.getRoutines(level);
  }

  getTodayProgress(): Completion[] {
    const today = new Date().toISOString().split('T')[0];
    const allCompletions = this.storage.get<Completion[]>('completions', []);
    return allCompletions.filter(c => c.date === today);
  }

  addCompletion(completion: Completion): void {
    this.storage.pushToArray('completions', completion);
  }

  getGoals(): Goal[] {
    return this.storage.get<Goal[]>('goals', [
      { id: '1', title: 'Call a family member today', done: false },
      { id: '2', title: 'Practice memory game 3 this week', done: false },
      { id: '3', title: '5-minute breathing after breakfast', done: false }
    ]);
  }

  saveGoals(goals: Goal[]): void {
    this.storage.set('goals', goals);
  }

  getArticles(): Article[] {
    return [
      {
        id: '1',
        title: 'Nutrition Pacing',
        excerpt: 'Learn how to maintain steady energy throughout the day...',
        body: 'Proper nutrition pacing involves eating smaller, balanced meals throughout the day rather than large meals. This helps maintain steady blood sugar levels and provides consistent energy for your brain and body.'
      },
      {
        id: '2',
        title: 'Anxiety Relaxation',
        excerpt: 'Simple techniques to manage stress and anxiety...',
        body: 'When feeling anxious, try the 4-7-8 breathing technique: inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system and helps calm your mind.'
      },
      {
        id: '3',
        title: 'Sleep Hygiene',
        excerpt: 'Tips for better sleep quality and rest...',
        body: 'Good sleep hygiene includes maintaining a consistent bedtime, avoiding screens before bed, keeping your bedroom cool and dark, and establishing a relaxing bedtime routine.'
      },
      {
        id: '4',
        title: 'Feldenkrais Basics',
        excerpt: 'Gentle movement exercises for body awareness...',
        body: 'Feldenkrais exercises focus on slow, mindful movements that improve body awareness and reduce tension. These gentle exercises can help with flexibility, balance, and overall well-being.'
      }
    ];
  }

  // Add the missing set method
  set(key: string, value: any): void {
    this.storage.set(key, value);
  }
}
