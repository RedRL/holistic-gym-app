import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';
import { DataService, Article } from '../../services/data.service';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [AppHeaderComponent, CommonModule, TPipe],
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
