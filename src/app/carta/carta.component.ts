// carta.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  textoCompleto: string = `Querida Fernanda Este es un mensaje especial que escribí solo para ti.Espero que lo disfrutes.Con amor, Jeremy.Querida Fernanda,Este es un mensaje especial que escribí solo para ti.Espero que lo disfrutes.\n\nCon amor, Jeremy.Querida Fernanda,\n\nEste es un mensaje especial que escribí solo para ti.\nEspero que lo disfrutes.\n\nCon amor, Jeremy.Querida Fernanda,\n\nEste es un mensaje especial que escribí solo para ti.\nEspero que lo disfrutes.\n\nCon amor, Jeremy.Querida Fernanda,\n\nEste es un mensaje especial que escribí solo para ti.\nEspero que lo disfrutes.\n\nCon amor, Jeremy.Querida Fernanda,\n\nEste es un mensaje especial que escribí solo para ti.\nEspero que lo disfrutes.\n\nCon amor, Jeremy.Querida Fernanda,\n\nEste es un mensaje especial que escribí solo para ti.\nEspero que lo disfrutes.\n\nCon amor, Jeremy.`;
  textoEscrito: string = '';
  index: number = 0;

  ngOnInit(): void {
    this.iniciarEscritura();
  }

  iniciarEscritura(): void {
    const intervalo = setInterval(() => {
      if (this.index < this.textoCompleto.length) {
        this.textoEscrito += this.textoCompleto.charAt(this.index);
        this.index++;
        
        // Hacer scroll hacia abajo
        const pergaminoElement = document.querySelector('.pergamino') as HTMLElement;
        pergaminoElement.scrollTop = pergaminoElement.scrollHeight;
      } else {
        clearInterval(intervalo);
      }
    }, 100); // Ajusta la velocidad de escritura aquí

    // Asegúrate de que el texto aparezca
    setTimeout(() => {
      const textoElement = document.querySelector('.texto') as HTMLElement;
      textoElement.style.opacity = '1'; // Muestra el texto después de que comience a escribirse
    }, 1000); // Espera 1 segundo antes de mostrar el texto
  }
}
