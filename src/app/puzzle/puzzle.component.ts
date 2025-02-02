import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '../service/puzzle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  imagenSrc = 'assets/img/puzzle.JPEG';
  piezas: number[] = [];
  posicionVacia: number = 0;
  juegoCompletado = false;
  mostrarPopup = false; // Controla la visibilidad del popup

  constructor(private puzzleService: PuzzleService, private router: Router) {} // Inyecta el servicio
  ngOnInit(): void {
    this.iniciarPuzzle();
  }

  iniciarPuzzle(): void {
    this.piezas = [1, 2, 3, 4, 5, 6, 7, 8, 0]; 
    this.mezclarPuzzle();
    this.juegoCompletado = false;
    this.mostrarPopup = false; // Asegúrate de ocultar el popup al reiniciar
  }

  mezclarPuzzle(): void {
    for (let i = 0; i < 100; i++) {
      const movimientosPosibles = this.obtenerMovimientosPosibles();
      const movimientoAleatorio = movimientosPosibles[Math.floor(Math.random() * movimientosPosibles.length)];
      this.moverPieza(movimientoAleatorio);
    }
  }

  obtenerMovimientosPosibles(): number[] {
    const movimientos: number[] = [];
    const posVacia = this.piezas.indexOf(0);

    if (posVacia >= 3) movimientos.push(posVacia - 3);
    if (posVacia < 6) movimientos.push(posVacia + 3);
    if (posVacia % 3 !== 0) movimientos.push(posVacia - 1);
    if (posVacia % 3 !== 2) movimientos.push(posVacia + 1);

    return movimientos;
  }

  intercambiarPiezas(index: number): void {
    const posVacia = this.piezas.indexOf(0);
    const movimientosPosibles = this.obtenerMovimientosPosibles();

    if (movimientosPosibles.includes(index)) {
      this.moverPieza(index);
      this.verificarCompletado();
    }
  }

  moverPieza(index: number): void {
    const posVacia = this.piezas.indexOf(0);
    [this.piezas[posVacia], this.piezas[index]] = [this.piezas[index], this.piezas[posVacia]];
    this.posicionVacia = index;
  }

  verificarCompletado(): void {
    console.log('Estado del puzzle:', this.piezas); // Ver qué orden tiene
    this.juegoCompletado = this.piezas.every((valor, index) => valor === index);
    if (this.juegoCompletado) {
      this.mostrarPopup = true;
      this.markPuzzleAsCompleted();
    }
  }
  markPuzzleAsCompleted(): void {
    this.puzzleService.completarPuzzle(); // Llama al servicio para marcar como completado
  }
  calcularPosicion(valor: number): string {
    if (valor === 0) return 'none'; // Espacio vacío
  
    const fila = Math.floor(valor / 3);
    const columna = valor % 3;
    return `-${columna * 100}px -${fila * 100}px`;
  }
  
  obtenerBackgroundImage(valor: number): string {
    return valor === 0 ? 'none' : `url(${this.imagenSrc})`;
  }

  cerrarPopup(): void {
    this.mostrarPopup = false;
    this.router.navigate(['/carta']);
  }
}
