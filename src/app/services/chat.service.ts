import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  async ask(question: string): Promise<string> {
    const text = question.toLowerCase();
    
    if (text.includes('sleep')) {
      return 'Try a consistent bedtime and dim lights 1 hour before sleep. Avoid screens late; a short breathing session can help. Would you like to start the Beginner Breathing Exercise now?';
    }
    
    if (text.includes('anxiety') || text.includes('stress')) {
      return 'A slow 5-minute breathing routine and a short walk can ease stress. In the app, open "Let\'s Begin"  Breathing (Beginner).';
    }
    
    if (text.includes('pain')) {
      return 'Gentle, pain-free range of motion and easy breathing may help. If pain is severe or new, seek professional care.';
    }
    
    return 'I can help with Sleep, Breathing, Movement and simple goals. Try "Let\'s Begin  Daily Routine" to start a short session.';
  }
}
