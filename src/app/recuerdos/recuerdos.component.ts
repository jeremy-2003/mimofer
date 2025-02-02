import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recuerdos',
  templateUrl: './recuerdos.component.html',
  styleUrls: ['./recuerdos.component.css']
})
export class RecuerdosComponent {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  currentIndex: number = 0; // Índice del slide actual
  items = [
    { type: 'image', src: 'assets/img/image9.JPEG', description: 'Jeje esta fue nuestra primera cita, un poco fuera de lo normal jeje tu no esperabas nada de nada pero sho iba a lo grande y decidido. Esta fotito me hace recordar que tambien ocurrieron cosas que no planee jsjs lo del baile por ejemplo a espaldas de plaza fue muy bonito me encanto y bueno el abrazo ahh fue tan bonito sentir un abrazo tuyo me encanto. Muy aparte de eso la pasamos muy bien recorde pues tambien la primera vez que salimos con Kev a esa barra libre jsjsj trato de dejarnos solos para conversar y hablar un poco mas jsjs y miranos hoy aqui estamos jsjs todo valio la pena la espera el hecho de ser directos cada uno sobre lo que queria y sentia en su momento es algo que me gusto porque si bien yo te iba a decir para hablar me ganaste de cierta forma y pues todo salio bien. Este dia te veias muy bonita con tu orquidea y como olvidar el tiempo que pasamos en los bolos y billar jsjs me diverte aunque era la primera ves que yo iba a esos lugares' },
    { type: 'image', src: 'assets/img/image1.JPEG', description: 'La expo de la INTERCON como olvidar ese dia po si ibamos formalitos todos bonitos me gusto pasarla y tener una foto asi jeje es un tipo de vestimenta que me gusta jeje por eso es importante fue bonito caminar de regreso caminando contigo jejej de la manos es una de las caminatas mas largas despues claro po de la del parque de las leyendas pero una caminata de noche asi formalito la verdad que me parecio muy bonito.' },
    { type: 'image', src: 'assets/img/image4.JPEG', description: 'Aqui fue po mientras estabamos esperando los makis y alitas jsjs estaban ricos pero nos llenamos como siempre somos unos tragones peroooo ya po ya toca la dieta morshy sino no llegamos a la graduacion jsjsjs. Hay que comer mas sanito jsjs y empezar a ir al gym juntitos po quizas los sabados creo q es mas factible si esq te animas ya q dias de semana aveces en la noche se llena demasiado po bebe pero bueno jeje ahi lo dejo morshy para q decidas tu jeje' },
    { type: 'video', src: 'assets/videos/recuerdo1.MP4', description: 'Esto ocurrio de la nada jsjs iba algo tarde a la U y justo coincidio con tu hora de almuerzo asi que po me baje en la rambla para poder verte un ratito, cada ratito a tu lado era bonito y especial y aun lo sigue siendo y siempre sera asi. Y asi po me gusto xq de la nada surgio y fue bonito jeje te quiero mucho bebe deberia escaparme pa almorzar juntos de nuevo jeje aunque normalmente no me guste los lugares con demasiada gente como te dije pos contigo si tu estas ahi lo hace parecer perfecto y al final solo me temrino concentrando en ti viendo tu carita, jugando con tus manitas, o tu carita es bonito...' },
    { type: 'image', src: 'assets/img/image5.JPEG', description: 'Parque de las leyendas jejeje bonito dia la verdad caminamos regular diria yo y tomamos fotitos de los animales y comimos rico tambien jejej y pos esta foto tambien es especial porque es la que le mandaste a tu madre estaba algo nervioso por la foto pero me gusto jejeje. Tambien recuerdo que se te antojaba comer un chicharron o bueno chanchito y para tu suerte habia en el restaurante y estaba rico y que decir po a este señorito le encanta la comida marina asi que aproveche en pedirme algo asi. No iba hace tiempo al parque de las leyendas tambien me recuerdo que intente ganarte algun obsequio jsjs con eso de disparar perooo los corchos son muy inestables morshy no es mi culpa jsjs' },
    { type: 'image', src: 'assets/img/image6.JPEG', description: 'Este parquesito hemos ido diria un par de veces regulares jsjs es un parque importante tambien para darnos mimos, abracitos y cariño po jeje y bueno tambien hablar de otras cositas y ashi es uno de los primero lugares en donde nos empezamos a dar cariño sin contar el frente del teatro nacional que tambien es uno de nuestro lugares preferidos diria yo. Asi mismo recuerdo que si no me falla la memoria fue una de las primeras fotos que subiste a tu estado de nuestros pies xd bueno de tu zapatilla y de mi zapato me gusto eso sin pedirtelo ni nada son cositas pequeñas que a mi me gustan y tu tambien eres mi pequeña asi que me gustas muchos mas 💜' },
    { type: 'image', src: 'assets/img/image7.JPEG', description: 'Jsjsjs esta fotito era tarde po ya y se me antojo ir por un chaufa bueno casi siempre tengo antojo de eso y ya po tu me llevaste ahi y solo tomaste esa limonada xq habra sido si me haces recordar te ganas un premio jeje tabas preocupada no morshy? Pero fuera de eso sales hermosa en la foto bella preciosa jsjs aunque no te avise para toamrte la fotito siempre sales muy bien me gusta tomarte fotos aveces de la nada 💜. Aprovechando esto jsjs perdon por lo de ese dia :c fue sin intencion morshy pero la cosa es q se soluciono si mal no recuerdo como en dos dias jsjs somos flashes.' },
    { type: 'image', src: 'assets/img/image8.JPEG', description: 'Uyy jsjs como olvidar ese dia te tuve entre incertidumbre al igual que la primera cita que tuvimos jsjs no sabias nada peroooo creo que en esta tu ya sospechabas solo que yo me hacia al loco solo que queria que sea sorpresa po. Me gusto mucho pasar por esa experiencia contigo eres una señorita que se merece muchas cosas como siempre te digo asi que yo intento darte todo ello y un poquito mas no sabes lo feliz que estuve ese dia me puse a recordar osea lo que veia muy lejos en un inicio y en ese momento tenerte ahi cumpliendo 1 mes a tu lado jeje fue una de las sensaciones mas bonita que he podido sentir y que estoy seguro que seguire sintiendo con el pasar del tiempo y cumplamos muchos mas meses que tendras que aguantarme jeje.' }
  ];
  
  ngAfterViewInit() {
    if (this.videoElement) {
      this.videoElement.nativeElement.muted = true;
      this.videoElement.nativeElement.play();
    }
  }
  // Método para ir al slide anterior
  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.items.length - 1 : this.currentIndex - 1;
  }

  // Método para ir al siguiente slide
  nextSlide() {
    this.currentIndex = (this.currentIndex === this.items.length - 1) ? 0 : this.currentIndex + 1;
  }
}
