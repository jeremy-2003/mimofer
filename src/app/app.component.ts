import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TriviaService } from './service/trivia.service';
import { PuzzleService } from './service/puzzle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuOpen: boolean = false;
  showMenu: boolean = true;
  countdownEnd: boolean = false;
  triviaCompleted: boolean = false;
  puzzleCompleted: boolean = false;
  countdown!: string;

  constructor(private router: Router, private triviaService: TriviaService, private puzzleService: PuzzleService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("URL detectada:", event.urlAfterRedirects); // <-- Usamos urlAfterRedirects
        this.showMenu = !event.urlAfterRedirects.startsWith('/login');
      }
    });
  
    this.startCountdown(new Date('2025-01-03T00:00:00'));
  
    this.triviaService.triviaCompletada$.subscribe((completada) => {
      this.triviaCompleted = completada; // Actualiza la UI en tiempo real
    });
    this.puzzleService.puzzleCompletado$.subscribe((completado) => {
      this.puzzleCompleted = completado; // Actualiza la UI en tiempo real
    });
  }
  

  startCountdown(endTime: Date) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(interval);
        this.countdownEnd = true;
        this.countdown = "¡Es hora de celebrar!";
      }
    }, 1000);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Método para actualizar el estado de Trivia completada
  markTriviaAsCompleted() {
    this.triviaCompleted = true;
    localStorage.setItem('triviaCompleted', 'true');
  }
}
