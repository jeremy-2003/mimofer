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
    { pregunta: '¿Cuando fue la primera salida que tuvimos solo los 2 juntos?', opciones: ['31/08/2024', '30/08/2024', '17/07/2024', '31/08/2024'], respuesta: '31/08/2024' },
    { pregunta: '¿Como se llama el primer restaurante que fuimos?', opciones: ['Mi Sociedad Privada', 'Mi Propiedad Privada', 'Mercado Aviacion', 'Museo Laco'], respuesta: 'Mercado Aviacion' },
    { pregunta: '¿Cual fue el recorrido de nuestra primera cita?', opciones: ['Plaza SM->Bolos->Almuerzo->Bailar->Comprar', 'Plaza SM->Comprar->Almuerzo->Bailar->Bolos', 'Plaza SM->Comprar->Almuerzo->Bolos->Bailar', 'Plaza SM->Bolos->Almuerzo->Comprar->Bailar'], respuesta: 'Plaza SM->Comprar->Almuerzo->Bolos->Bailar' },
    { pregunta: '¿Como se llama el primer restaurante que fuimos?', opciones: ['Mi Sociedad Privada', 'Mi Propiedad Privada', 'Mercado Aviacion', 'Museo Laco'], respuesta: 'Mercado Aviacion' },
    { pregunta: '¿Cual es nuestro lugar?', opciones: ['Al lado del teatro nacional', 'Parque frente plaza SM', 'La Rambla', 'Plaza San Miguel'], respuesta: 'Al lado del teatro nacional' },
    { pregunta: '¿Quien dio el primero beso/pico a quien?', opciones: ['Tu a mi', 'Yo a ti', 'Mutuo acuerdo', 'No paso hasta ser enamorados'], respuesta: 'Yo a ti' },
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
