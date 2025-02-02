import { Component } from '@angular/core';
import { TriviaService } from '../service/trivia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {
  preguntas = [
    { pregunta: '¿Cuando fue la primera salida que tuvimos juntos?', opciones: ['Rojo', 'Azul', 'Morado', 'Verde'], respuesta: 'Morado' },
    { pregunta: '¿Como se llama el primer restaurante que fuimos?', opciones: ['10 de enero', '28 de diciembre', '3 de febrero', '14 de febrero'], respuesta: '28 de diciembre' },
    { pregunta: '¿Cual fue el recorrido de nuestra primera cita?', opciones: ['Perfect - Ed Sheeran', 'A Thousand Years - Christina Perri', 'Stand by Me - Ben E. King', 'Love Me Like You Do - Ellie Goulding'], respuesta: 'Perfect - Ed Sheeran' }
  ];

  preguntaActual = 0;
  respuestasCorrectas = 0;
  triviaFinalizada = false;
  mostrarPopup = false;
  porcentajeAciertos = 0;
  resumenRespuestas: string[] = [];

  constructor(private triviaService: TriviaService, private router: Router) {}

  seleccionarRespuesta(opcion: string) {
    const preguntaActualObj = this.preguntas[this.preguntaActual];
    const esCorrecta = opcion === preguntaActualObj.respuesta;

    if (esCorrecta) {
      this.respuestasCorrectas++;
      this.resumenRespuestas.push(`P${this.preguntaActual + 1} ✅`);
    } else {
      this.resumenRespuestas.push(`P${this.preguntaActual + 1} ❌`);
    }

    if (this.preguntaActual < this.preguntas.length - 1) {
      this.preguntaActual++;
    } else {
      this.finalizarTrivia();
    }
  }

  finalizarTrivia() {
    this.triviaFinalizada = true;
    this.porcentajeAciertos = Math.round((this.respuestasCorrectas / this.preguntas.length) * 100);
    this.mostrarPopup = true;

    // Si el usuario responde todo correctamente, actualizar estado global
    if (this.porcentajeAciertos === 100) {
      this.triviaService.completarTrivia();
    }
  }

  cerrarPopup() {
    this.mostrarPopup = false;
    this.preguntaActual = 0;
    this.respuestasCorrectas = 0;
    this.triviaFinalizada = false;
    this.resumenRespuestas = [];
    if(this.porcentajeAciertos === 100)
    {
      this.router.navigate(['/puzzle']);
    }
  }
}
