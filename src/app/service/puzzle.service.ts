import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  private puzzleCompletado = new BehaviorSubject<boolean>(this.verificarPuzzleCompletado());

  puzzleCompletado$ = this.puzzleCompletado.asObservable(); // Observable para suscribirse

  constructor() {}

  private verificarPuzzleCompletado(): boolean {
    return localStorage.getItem('puzzleCompletado') === 'true';
  }

  completarPuzzle() {
    localStorage.setItem('puzzleCompletado', 'true');
    this.puzzleCompletado.next(true); // Notifica a los suscriptores
  }
}
