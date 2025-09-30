import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export interface Reminder {
  id: string;
  name: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  constructor(private storage: StorageService) {}

  scheduleReminder(name: string, time: string): void {
    const reminder: Reminder = {
      id: Date.now().toString(),
      name,
      time
    };
    this.storage.pushToArray('reminders', reminder);
  }

  getReminders(): Reminder[] {
    return this.storage.get<Reminder[]>('reminders', []);
  }

  removeReminder(id: string): void {
    const reminders = this.getReminders();
    const filtered = reminders.filter(r => r.id !== id);
    this.storage.set('reminders', filtered);
  }
}
