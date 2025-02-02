// carta.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  textoCompleto: string = `Hola mi amor si llegaste hasta aqui es porque jeje pasaste esos 2 minijuegos espero que te hayas divertido y no estresado jsjs. Comenzar por decirte que te extrañe te extrañe como no tienes idea el echo de querer verte o pasar un ratito mas contigo hasta mimir y asi queria tocar tu mano abrazarte olerte a ti tu aroma sentirte que estamos juntos escaparme para ir a verte a la rambla jeje y asi. Diria que al principio no lo senti mucho pero de ahi me entraron las ganas de siempre querte irte a ver darte besitos, abrazos ya sabes cosas de las que me gustan darte siempre. Pero bueno el lunes te veré y la pasaremos juntos aunque sea un ratito jsjs la verdad espero que leas esto mucho antes de que nos veamos espero que puedas jsjs te amooo hermosa!! Bueno ahora si a lo que vinimos FELIZ 2 MESES MORSHY un logro soportarme y soportarte jsjs no bromita, eres espcial para mi si bien tal vez 2 meses no parezca mucho pero a mi me gusta celebrar el mes a mes es importante queria agradecerte por tu tiempo, por tus ganas, por tu comprension por todo el esfuerzo que hacer por quedarte un ratito mas cada noche o cada tarde lo valoro muchisimo porque es tiempo contigo es por eso que hoy llegamos a cumplir 2 mesesitos y espeor que sean muchos mas. Aun recuerdo cuando saliamos de comer del chillis que fuimos a comer a plaza jeje y hablamos me dijiste no sabes cuan alegre estaba el solo pensar que ya iba a ser tu enamorado tu pareja jsjs soy muy lloron losiento jsjs asi que estoy ahi lagrimeando escribiendo esto. Pero mucho antes de eso ya nos tratabamos bonito me gustaba mucho pero sabias muy bien que era lo que queria yo y muchas gracias por ponerte en mi lugar 💜💜. Todo este tiempo a tu lado me ha gustado se que hemos mejorado mucho de como empezamos y pues seguiremos mejorando aveces nos equivocamos pero siempre podremos hablarlo, arreglarlo y aprender de esas cosas quiero pasar muchos meses mas contigo muchas experciencias mas eres esa persona a la cual pienso apenas despierto jsjs ya lo recordaras que aveces te decia tus buenos dias jsjsj medios raros porque literalmente tenia sueño pero yo tenia que darte los buenos dias jeje desde ya te mando un fuerte abrazo y un besito en tu frente en tu carita linda preciosa. Otro momento que tambien que me acabo de recordar justo escribiendo esto jsjs fue cuando fui a tu casa estaba algo nervioso jsjsj el echo de estar ahi en tu casita estar contigo, interactuar con tu mami y tu hermano jsjs con tu hermano no hablamos mucho pero con tu mami quizas si hablamos poquito más, a mi parecer le cai bien jsjs almenos a tu mami y me gusto estar ahi cerca de lo que es bueno tecnicamente un dia workeando en tu casita jeje. Ya lo dije muchas veces eres importane, me gustas, eres unica, y estoy feliz de poder cumplir un mes mas contigo hoy. Hoy nos veremos lo mas provable es que vayamos por una ensalada jsjs por la dieta po pero bueno este es el final de mi cartita quizas te he dicho cosas que siepre te suelo decir pero no soy muy bueno con las palabras y espero que te hayas entretenido un poco y este presente te haya gustado. Te estare esperando en la tardecita-noche para darte un fuerte abrazo y decirte lo mucho que te quiero 💜`;
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
