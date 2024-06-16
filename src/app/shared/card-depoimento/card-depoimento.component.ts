import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.css']
})
export class CardDepoimentoComponent {

depoimento: string = ` Desde que comecei a usar a Bookwave, minha experiência de leitura se transformou completamente. É, sem
            dúvida, o melhor site para compartilhar e descobrir novas perspectivas sobre livros. A comunidade é engajada
            e apaixonada, e cada recomendação que recebo aqui tem sido incrível. Adoro a forma como posso interagir com
            outros leitores.`

            autoria: string = 'Mariana Faustino'       
}
