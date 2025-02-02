
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countdown!: string;
  countdownEnd: boolean = false; // Estado para saber si el contador ha llegado a 0

  constructor() { }

  ngOnInit(): void {
    this.startCountdown(new Date('2025-01-03T00:00:00'));
  }

    startCountdown(endTime: Date) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime.getTime() - now;
  
        // Cálculos para días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        // Mostrar el contador en formato "DD:HH:MM:SS"
        this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
        // Si el contador llega a 0
        if (distance < 0) {
          clearInterval(interval);
          this.countdownEnd = true; // Cambia el estado para mostrar el mensaje
          this.countdown = "¡Es hora de celebrar!"; // Mensaje de celebración
        }
      }, 1000);
    }
}