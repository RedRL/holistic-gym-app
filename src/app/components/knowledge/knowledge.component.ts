import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent, IonCardTitle, IonButton, IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/angular/standalone';
import { DataService, Article } from '../../services/data.service';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent, IonCardTitle, IonButton, IonAccordion, IonAccordionGroup, IonItem, IonLabel, CommonModule],
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  articles: Article[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.articles = this.dataService.getArticles();
  }
}
