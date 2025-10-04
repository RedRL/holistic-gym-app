import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';
import { TPipe } from '../shared/pipes/t.pipe';

@Component({
  standalone: true,
  selector: 'app-level-select',
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.css']
})
export class LevelSelectComponent {
  level: 'beginner'|'advanced'|'grand' = (localStorage.getItem('level') as any) || 'beginner';
  constructor(private router: Router) {}

  setLevel(l: 'beginner'|'advanced'|'grand') {
    this.level = l;
  }
  next() {
    localStorage.setItem('level', this.level);
    this.router.navigate(['/lets-begin']);
  }
}
