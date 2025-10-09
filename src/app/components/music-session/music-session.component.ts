import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AppHeaderComponent } from '../../../shared/components/app-header/app-header.component';
import { TPipe } from '../../shared/pipes/t.pipe';
import { TranslateService } from '../../shared/services/translate.service';

@Component({
  selector: 'app-music-session',
  standalone: true,
  imports: [CommonModule, AppHeaderComponent, TPipe],
  templateUrl: './music-session.component.html',
  styleUrls: ['./music-session.component.scss']
})
export class MusicSessionComponent {
  @ViewChild('musicVideo') musicVideo!: ElementRef<HTMLVideoElement>;
  
  maxWatchedTime = 0;
  currentTime = 0;
  duration = 0;
  progressPercentage = 0;
  showCongratulations = false;
  isPlaying = false;
  isFullscreen = false;

  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {}

  onVideoLoaded() {
    const video = this.musicVideo.nativeElement;
    this.duration = video.duration;
  }

  onTimeUpdate() {
    const video = this.musicVideo.nativeElement;
    this.currentTime = video.currentTime;
    
    // Update max watched time (only moves forward)
    if (this.currentTime > this.maxWatchedTime) {
      this.maxWatchedTime = this.currentTime;
    }
    
    // Calculate progress percentage based on max watched time
    this.progressPercentage = (this.maxWatchedTime / this.duration) * 100;
    
    // Check if video is completed (watched to the end)
    if (this.maxWatchedTime >= this.duration - 1 && !this.showCongratulations) {
      this.showCongratulations = true;
      this.markMusicSessionCompleted();
    }
  }

  onPlay() {
    this.isPlaying = true;
  }

  onPause() {
    this.isPlaying = false;
  }

  togglePlayPause() {
    const video = this.musicVideo.nativeElement;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  rewind5Seconds() {
    const video = this.musicVideo.nativeElement;
    video.currentTime = Math.max(0, video.currentTime - 5);
  }

  toggleFullscreen() {
    const container = document.querySelector('.video-wrapper') as HTMLElement;
    
    if (!this.isFullscreen) {
      // Enter fullscreen
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).mozRequestFullScreen) {
        (container as any).mozRequestFullScreen();
      }
      this.isFullscreen = true;
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      }
      this.isFullscreen = false;
    }
  }

  markMusicSessionCompleted() {
    // Mark music session as completed for today
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('musicSessionCompleted', today);
  }

  goBack() {
    this.router.navigate(['/lets-begin']);
  }
}


