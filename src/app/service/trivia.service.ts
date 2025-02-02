import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private triviaCompletada = new BehaviorSubject<boolean>(this.verificarTriviaCompletada());

  triviaCompletada$ = this.triviaCompletada.asObservable(); // Observable para suscribirse

  constructor() {}

  private verificarTriviaCompletada(): boolean {
    return localStorage.getItem('triviaCompletada') === 'true';
  }

  completarTrivia() {
    localStorage.setItem('triviaCompletada', 'true');
    this.triviaCompletada.next(true); // Notifica a los suscriptores
  }
}
