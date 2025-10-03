import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { ChatService } from '../../services/chat.service';

interface ChatMessage {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [AppHeaderComponent, FormsModule, CommonModule, DatePipe],
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.scss']
})
export class AiAssistantComponent implements OnInit {
  messages: ChatMessage[] = [];
  currentMessage: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.addBotMessage('Hello! I\'m here to help with sleep, breathing, movement, and wellness questions. How can I assist you today?');
  }

  sendMessage() {
    if (!this.currentMessage.trim()) return;
    
    this.addUserMessage(this.currentMessage);
    this.getBotResponse(this.currentMessage);
    this.currentMessage = '';
  }

  sendQuickReply(text: string) {
    this.addUserMessage(text);
    this.getBotResponse(text);
  }

  addUserMessage(text: string) {
    this.messages.push({
      text,
      isBot: false,
      timestamp: new Date()
    });
  }

  addBotMessage(text: string) {
    this.messages.push({
      text,
      isBot: true,
      timestamp: new Date()
    });
  }

  async getBotResponse(question: string) {
    try {
      const response = await this.chatService.ask(question);
      this.addBotMessage(response);
    } catch (error) {
      this.addBotMessage('I\'m sorry, I couldn\'t process your question right now. Please try again.');
    }
  }

  toggleMic() {
    // Placeholder for future mic functionality
    console.log('Mic functionality not implemented in MVP');
  }
}
