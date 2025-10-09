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
  @ViewChild('videoContainer') videoContainer!: ElementRef<HTMLDivElement>;
  
  showPlayButton = true;
  isPlaying = false;
  isFullscreen = false;

  constructor(
    private router: Router,
    public translateService: TranslateService
  ) {}

  playVideo() {
    const video = this.musicVideo.nativeElement;
    video.play().then(() => {
      this.showPlayButton = false;
      this.isPlaying = true;
      console.log('Video started playing');
    }).catch((error) => {
      console.error('Error playing video:', error);
      alert('Unable to play video. Please try again.');
    });
  }

  togglePlayPause() {
    const video = this.musicVideo.nativeElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
      this.showPlayButton = false;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  rewind5Seconds() {
    const video = this.musicVideo.nativeElement;
    video.currentTime = Math.max(0, video.currentTime - 5);
  }

  toggleFullscreen() {
    const container = this.videoContainer.nativeElement;
    const video = this.musicVideo.nativeElement;
    
    if (!this.isFullscreen) {
      // Rotate screen to landscape (for mobile devices)
      if ((screen.orientation as any)?.lock) {
        (screen.orientation as any).lock('landscape').catch((err: any) => {
          console.log('Screen orientation lock not supported:', err);
        });
      }
      
      // Enter fullscreen
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((container as any).mozRequestFullScreen) {
        (container as any).mozRequestFullScreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
      this.isFullscreen = true;
      
      // Don't auto-play - let user control playback
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
      this.isFullscreen = false;
      
      // Unlock screen orientation
      if ((screen.orientation as any)?.unlock) {
        (screen.orientation as any).unlock();
      }
    }
  }

  goBack() {
    this.router.navigate(['/lets-begin']);
  }

  onVideoEnd() {
    // Navigate back after video ends
    console.log('Music session video ended');
    this.isPlaying = false;
    this.router.navigate(['/lets-begin']);
  }
}


